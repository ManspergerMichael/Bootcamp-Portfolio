from flask import Flask, render_template, request, redirect
app = Flask(__name__) 

@app.route('/')
def landing():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def submit():
    for x in request.form:
        print request.form
    return redirect('/')


app.run(debug=True) 