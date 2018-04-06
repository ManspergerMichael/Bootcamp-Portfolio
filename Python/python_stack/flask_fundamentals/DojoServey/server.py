from flask import Flask, render_template, request, redirect
app = Flask(__name__) 
#directs to page with form
@app.route('/')
def landing():
    return render_template('index.html')
#takes in data from form in index.html prints form data to terminal
@app.route('/result', methods=['POST'])
def submit():
    return render_template('result.html',name = request.form['Name'],
    location = request.form['Location'],langwage = request.form['Langwage'],
    comment = request.form['comment'])


app.run(debug=True) 