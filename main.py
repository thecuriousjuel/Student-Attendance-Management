import webbrowser
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

LOCALHOST = "127.0.0.1"
PORT = 5000

isAuthenticated = False

# Creating the flask app
app = Flask(__name__)
  

@app.route('/', methods=['GET', 'POST'])
def main():
    # if isAuthenticated:
    #     return render_template('home.html')
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    global isAuthenticated
    data = request.json
    username = data['username']
    password = data['password']
    print(username, password)
    if username == 'test' and password == 'test':
        isAuthenticated = True
        return jsonify({'authenticated': True}), 200
    return jsonify({'authenticated': False}), 401

# Starting the application
if __name__ == '__main__':
    url = f"http://{LOCALHOST}:{PORT}/"
    # webbrowser.open_new_tab(url)
    app.run(debug=True, host=LOCALHOST, port=PORT)