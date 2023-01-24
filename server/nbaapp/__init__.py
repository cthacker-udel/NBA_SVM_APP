from flask import Flask, request, Response
from flask_cors import CORS
import pickle
import os
import pandas as pd


def construct_dataframe():
    players_df = pd.read_csv(
        "./data/all_seasons.csv", index_col=0, encoding="ISO-8859-1"
    )
    player_info_df = pd.read_csv("./data/NBA_PLAYER_IDS.csv", encoding="ISO-8859-1")
    player_info_df["player_name"] = player_info_df["NBAName"]
    dataframe = pd.merge(players_df, player_info_df, on="player_name")
    dataframe = dataframe.drop(
        columns=[
            "ESPNLink",
            "ESPNName",
            "ESPNID",
            "ESPNBirthDate",
            "SpotracID",
            "SpotracName",
            "SpotracLink",
            "ESPNBirthDate",
        ]
    )
    dataframe.fillna(0, inplace=True)
    return dataframe


def create_app(test_config=None):

    app = Flask(__name__, template_folder="templates", static_folder="static")
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY="dev", DATABASE=os.path.join(app.instance_path, "flaskr.sqlite")
    )

    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    dataframe = construct_dataframe()
    print(dataframe.head())

    @app.route("/")
    def main_page():
        return Response([], status=200)

    @app.route("/playernames")
    def get_player_names():
        # dataframe = pd.read_pickle("./player_dataframe.pickle")
        return dataframe["player_name"].tolist()

    @app.route("/getplayer")
    def find_player_info():

        requested_player = request.args.get("player_name")

        if requested_player is None:

            return Response("Player not found", status=204)
        found_player_info = dataframe[
            dataframe["player_name"].str.startswith(requested_player)
        ]

        print("passed {}".format(requested_player))

        if found_player_info is None:

            return Response("Player not found", status=400)

        found_player_pfp = dataframe[dataframe["NBAName"] == requested_player]

        headshot_link = ""

        if found_player_pfp is not None and len(found_player_pfp) >= 1:

            headshot_link = (
                "https://cdn.nba.com/headshots/nba/latest/1040x760/{}.png".format(
                    int(found_player_pfp["NBAID"].tolist()[0])
                )
            )

        print("found player info =  ", found_player_info)

        player_info_dict = found_player_info.to_dict()
        player_info_dict["headshot_link"] = headshot_link

        return player_info_dict

    return app
