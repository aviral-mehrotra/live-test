from flask import Flask
from flask_cors import CORS, cross_origin
import requests


app = Flask(__name__)

@app.route('/get_data')
@cross_origin(origin='*')
def get_data():
    r = requests.get("http://ergast.com/api/f1/current/last/results.json")
    r = r.json()

    return r


# Running app
if __name__ == '__main__':
    app.run(debug=True, port=8080)
