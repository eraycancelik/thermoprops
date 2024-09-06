from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": ["http://127.0.0.1:80", "http://localhost:80", "http://172.21.0.1:80","http://localhost"]}})



@app.route('/')
def hello_world():
    message = "Selamun aleyküm, dünya!,naber len"
    return jsonify(message=message)
