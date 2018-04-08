from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__) 
app.secret_key = "Bazinga!"

#directs to page with form
@app.route('/')
def landing():
    return render_template('index.html')
#takes in data from form in index.html prints form data to terminal
@app.route('/result', methods=['POST'])
def submit():
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        print "first statement run"
        return redirect('/')
    if len(request.form('comment')) > 1:
        flash("Comment must be under 120 characters!")
        print "second statement"
        return redirect('/')
    return redirect('result.html',name = request.form['Name'],
    location = request.form['Location'],langwage = request.form['Langwage'],
    comment = request.form['comment'])


app.run(debug=True) 