from flask import Flask, render_template, request, Response, jsonify
from flask_cors import CORS
from sklearn import linear_model
import pandas as pd

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

read_player_info = pd.read_csv(
    "./data/all_seasons.csv", index_col=0, encoding="ISO-8859-1"
)
read_player_image_info = pd.read_csv("./data/NBA_PLAYER_IDS.csv", encoding="ISO-8859-1")


@app.route("/")
def main_page():
    return Response([], status=200)


@app.route("/playernames")
def get_player_names():
    return read_player_info["player_name"].tolist()


@app.route("/getplayer")
def find_player_info():
    requested_player = request.args.get("player_name")
    print("hit controller with ", requested_player)
    if requested_player is None:
        return Response("Player not found", status=400)
    found_player_info = read_player_info[
        read_player_info["Player_name"] == requested_player
    ]
    if found_player_info is None:
        return Response("Player not found", status=400)
    found_player_pfp = read_player_image_info[
        read_player_image_info["NBAName"] == requested_player
    ]
    headshot_link = ""
    if found_player_pfp is not None:
        headshot_link = (
            "https://cdn.nba.com/headshots/nba/latest/260x190/{}.png".format(
                found_player_pfp["NBAID"]
            )
        )
    payload = {}
    payload["age"] = found_player_info["Age"]
    payload["height"] = found_player_info["Player_height"]
    payload["weight"] = found_player_info["Player_weight"]
    payload["college"] = found_player_info["College"]
    payload["country"] = found_player_info["Country"]
    payload["draft_year"] = found_player_info["Draft_year"]
    payload["draft_number"] = found_player_info["Draft_number"]
    payload["gp"] = found_player_info["Gp"]
    payload["points"] = found_player_info["Pts"]
    payload["rebounds"] = found_player_info["Reb"]
    payload["assists"] = found_player_info["Ast"]
    payload["net_rating"] = found_player_info["Net_rating"]
    payload["offensive_rebound_percentage"] = found_player_info["Oreb_pct"]
    payload["defensive_rebound_percentage"] = found_player_info["Dreb_pct"]
    payload["usg_percentage"] = found_player_info["Usg_pct"]
    payload["ts_percentage"] = found_player_info["Ts_pct"]
    payload["assist_percentage"] = found_player_info["assist_percentage"]
    payload["season"] = found_player_info["Season"]
    payload["headshot_link"] = headshot_link
    return Response(jsonify(payload), status=200)
