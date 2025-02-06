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
    if not isAuthenticated:
        return render_template('index.html')
    return render_template('dashboard.html')


def login():
    pass


# Starting the application
if __name__ == '__main__':
    url = f"http://{LOCALHOST}:{PORT}/"
    webbrowser.open_new_tab(url)
    app.run(host=LOCALHOST, port=PORT)