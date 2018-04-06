from flask import Flask, render_template, request, redirect
app = Flask(__name__) 
#directs to page with form
@app.route('/')
def landing():
    return render_template('index.html')
#takes in data from form in index.html prints form data to terminal
@app.route('/process', methods=['POST'])
def submit():
    #data sent from index.html is in the request object.form dictionary
    #dictionary keys will have the same name as the input field name properties
    print request.form['fName']
    print request.form['lName']
    return redirect('/')


app.run(debug=True) 