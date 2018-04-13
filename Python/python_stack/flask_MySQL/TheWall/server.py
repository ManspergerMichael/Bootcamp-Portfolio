from flask import Flask, request, redirect, render_template, session, flash, Markup
from mysqlconnection import MySQLConnector
import re, md5, os, binascii
app = Flask(__name__)
mysql = MySQLConnector(app,'TheWall')
app.secret_key = "secret_key"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
salt = binascii.b2a_hex(os.urandom(10))

@app.route('/')
def home():
    return render_template("login.html")
    
@app.route('/wall')
def wall():
    messages = mysql.query_db("SELECT u.first_name, u.last_name, m.message, m.id, DATE_FORMAT(m.created_at, '%M, %D, %Y') AS created_at FROM users u JOIN messages m ON u.id = m.users_id ORDER BY m.created_at DESC")
    comments = mysql.query_db("SELECT c.comment, u.first_name,u.last_name,DATE_FORMAT(c.created_at, '%M, %D, %Y') AS created_at, c.messages_id FROM messages m JOIN comments c ON c.messages_id = m.id JOIN users u ON c.users_id = u.id ")
    #print messages
    return render_template("index.html", all_messages = messages, all_comments = comments)

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
    #encript entered password with same salt used to decript stored password
    encriptedPassword = md5.new(request.form['password'] + userInfo[0]['salt']).hexdigest()

    #print encriptedPassword, userInfo[0]['password']
    #compaire entered email and password with stored email and password
    if (request.form['email'] == userInfo[0]['email'] and userInfo[0]['password'] == encriptedPassword):
        access = True

    
    #replace when ready to add encripted passwords
    #if(request.form['email'] == userInfo[0]['email'] and userInfo[0]['password'] == request.form['password']):
        #access = True

    #if user was found grant access        
    if access == True:
        #flash("Access Granted!")
        session['id'] = userInfo[0]['id']
        #print session['id']
        return redirect('/wall')
    else:
        flash("Email and password do not match records")
        return redirect('/')
    #print request.form['email']
    #print request.form['password']        
    return redirect('/wall')

@app.route('/message', methods=["POST"])
def insertMessage():
    query = "INSERT INTO messages(message, created_at,updated_at,users_id)values(:message,now(),now(),:uID);"
    #print session['id']
    data = {
        'message' : request.form['message'],
        'uID' : session['id']
    }
    mysql.query_db(query,data)
    return redirect('/wall')

@app.route('/comment', methods=["POST"])
def insertComment():
    #print request.form['messageID']
    #print request.form['message']
    query = "INSERT INTO comments(users_id, messages_id,comment,created_at,updated_at)values(:user_id,:message_id,:message,now(),now());"
    data = {
        'user_id': session['id'],
        'message_id': request.form['messageID'],
        'message': request.form['message']
    }
    mysql.query_db(query,data)
    #print "hi"
    return redirect('/wall')


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
    query = "INSERT INTO users (first_name, last_name, email,password, created_at, updated_at, salt) VALUES (:first_name, :last_name, :email, :password, now(), now(), :salt)"
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
    #session['message'] = "Access Granted!"
    flash("Registration sucsessfull! Please login!")
    return redirect('/')

app.run(debug=True)