from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re, md5, os, binascii
app = Flask(__name__)
app.secret_key = "secret_key"
mysql = MySQLConnector(app,'usersLRform')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
salt = binascii.b2a_hex(os.urandom(10))

@app.route('/')
def index():
    session['message'] = ""
    session['id'] = 0
    return render_template('index.html')

@app.route('/login', methods=["POST"])
def login():
    access = False
    session['message'] = ""
    #select only the record that matches with the entered email
    query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
    #insert entered email into query
    data = {'email': request.form['email']}
    #query DB
    userInfo = mysql.query_db(query,data)
    #encript entered password with same salt used to encript stored password
    encriptedPassword = md5.new(request.form['password'] + userInfo[0]['salt']).hexdigest()
    #print encriptedPassword, userInfo[0]['password']
    #compaire entered email and password with stored email and password
    if (request.form['email'] == userInfo[0]['email'] and userInfo[0]['password'] == encriptedPassword):
        access = True

    #if user was found grant access        
    if access == True:
        flash("Access Granted!")
        session['id'] = userInfo[0]['id']
        return redirect('/sucsess')
    else:
        flash("Email and password do not match records")
        return redirect('/')
    #print request.form['email']
    #print request.form['password']        
    return redirect('/')

@app.route('/register', methods=["POST"])
def register():
    isValidData = True
    #names validation more than 2 char and letters only
    #print request.form['first_name']
    if len(request.form['first_name']) < 2:
        flash("First name must be longer than two characters")
        return redirect('/')
    if not NAME_REGEX.match(request.form['first_name']):
        flash("First name: letters only")
        return redirect('/')
    #last name validation
    #print request.form['last_name']
    if len(request.form['last_name']) < 2:
        flash("Last name must be longer than two characters")
        return redirect('/')
    if not NAME_REGEX.match(request.form['last_name']):
        flash("Last name: letters only")
        return redirect('/')
    #email in valid format
    #print request.form['email']
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email format")
        return redirect('/')
    #password is at least 8 characters, matches confirmed
    #print request.form['password']
    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters long")
        return redirect('/')
    if request.form['confirmed_password'] != request.form['password']:
        flash("Passwords do not match")
        return redirect('/')
        
    #use md5 hash before inserting password to DB
    password = md5.new(request.form['password']+salt).hexdigest()
    
    #insert info to db
    query = "INSERT INTO users (first_name, last_name, email,password, salt) VALUES (:first_name, :last_name, :email, :password, :salt)"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email'],
             'password': password,
             'salt': salt
            }
    mysql.query_db(query, data)
    #redirect to sucsess page
    session['message'] = "Access Granted!"
    return redirect('/sucsess')

@app.route('/sucsess')
def sucsess():
    return render_template('sucsess.html')

app.run(debug=True)