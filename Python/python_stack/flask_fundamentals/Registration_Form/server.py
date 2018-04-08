from flask import Flask, render_template, request, redirect, flash
import re
app = Flask(__name__) 
app.secret_key = "Bazinga!"
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def landing():
    return render_template('index.html')

@app.route('/process',  methods=['POST']) #methods is used to set how data is opassed to this router
def process():
    #First name validation block
    #is Empty
    if len(request.form['fName']) <=0:
        flash("First Name field empty.",'error')
        print "first"
        return redirect('/')
    #has a number
    if not NAME_REGEX.match(request.form['fName']):
        flash("First Name has a number")
        print "second"
        return redirect('/')

    #Last name validation block
    #is empty
    if len(request.form['lName']) <=0:
        flash("Last Name field empty.",'error')
        return redirect('/')
    #has a number
    if not NAME_REGEX.match(request.form['lName']):
        flash("Last Name has a number")
        return redirect('/')

    #email validation block
    #is empty
    if len(request.form['email']) <=0:
        flash("Email field empty.",'error')
        return redirect('/')
    #valid email
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Email is invalid")
        return redirect('/')

    #password validation block
    #is empty
    if len(request.form['passWord']) <=0:
        flash("Password field empty.",'error')
        return redirect('/')
    #is smaller than 8 characters
    if len(request.form['passWord']) < 8:
        flash("Password must be at least 8 characters.",'error')
        return redirect('/')

    #confirmedPassword validation block
    #is empty
    if len(request.form['confirmedPassword']) <=0:
        flash("Confirm Password field empty.",'error')
        return redirect('/')
    #matches password 
    if request.form['confirmedPassword'] != request.form['passWord']:
        flash("Passwords do not match.",'error')
        return redirect('/')

    return render_template('result.html',fName = request.form['fName'],
                                lName = request.form['lName'],
                                email = request.form['email'],
                                password = request.form['passWord'],
                                confirmedPassword = request.form['confirmedPassword'])

app.run(debug=True) 