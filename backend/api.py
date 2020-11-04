from flask import Flask, request, jsonify, send_from_directory
from uuid import uuid4

app = Flask(__name__)

# cd backend
# python3 -m venv venv
#  . venv/bin/activate


@app.route('/registration', methods=['POST'])
def registration():
    userInfo = request.json
    if userInfo:
        rand_token = uuid4()
        return jsonify(rand_token)
    return "No user information is given"
