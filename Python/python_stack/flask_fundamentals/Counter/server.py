from flask import Flask, render_template, request, redirect,session
import random
app = Flask(__name__)
app.secret_key = "Bazinga!"

@app.route('/')
def index():
    if 'counter' not in session:
        session['counter'] = 0
    session['counter'] += 1
    return render_template('/counter.html')
@app.route('/addTwo')
def addTwo():
    if 'counter' not in session:
        session['counter'] = 0
    session['counter'] += 2
    return render_template('/counter.html')

@app.route('/reset')
def reset():
    if 'counter' not in session:
        session['counter'] = 1
    session['counter'] = 1
    return render_template('/counter.html')


app.run(debug=True)