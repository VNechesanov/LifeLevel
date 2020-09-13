from flask import Flask

app = Flask(__name__)


@app.route('/userInfo', methods=['GET'])
def userData():
    return {
        'userScore': 8.5,
        'name': 'Vladimir',
        'surname': 'Nechesanov',
    }

if __name__ == '__main__':
    app.run()

 
