from flask import Flask, render_template, request, redirect
app = Flask(__name__) 

@app.route('/')
def landing():
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    return render_template('ninja.html')

@app.route('/blue')
def blue():
    return render_template('blue.html')

@app.route('/red')
def red():
    return render_template('red.html')

@app.route('/purple')
def purple():
    return render_template('purple.html')

@app.route('/orange')
def orange():
    return render_template('orange.html')

#note to self: Research how this works
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catchAll(path):
    return render_template('catchAll.html')


app.run(debug=True) 