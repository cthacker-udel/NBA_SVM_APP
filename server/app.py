from flask import Flask, render_template, request, Response, jsonify
from flask_cors import CORS
from sklearn import linear_model
import pandas as pd

app = Flask(__name__, template_folder="templates", static_folder="static")
CORS(app)

read_player_info = pd.read_csv("./data/all_seasons.csv")
read_player_image_info = pd.read_csv('./data/NBA_PLAYER_IDS.csv')


@app.route("/")
def main_page():
    return []


@app.route("/playernames")
def get_player_names():
    return read_player_info["player_name"].tolist()


@app.route("/getplayer")
    found_player = read_player_image_info
