from flask import Flask, render_template  
app = Flask(__name__)

@app.route('/')
def hello_World():
    return render_template('HelloWorld.html')

app.run(debug=True)