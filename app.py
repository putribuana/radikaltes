from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "<h1>hello world</h1>"
