from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = "secret_key"
mysql = MySQLConnector(app,'emailVailidation')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    session['entered_email'] = ""
    return render_template('index.html')

@app.route('/validate', methods=["POST"])
def validate():
    #validate using regex
    if not EMAIL_REGEX.match(request.form['email']):
        flash("THATS NOT A VALID EMAIL YOU TWICE BAKED MORON!")
        return redirect('/')
    #IF valid: insert email to database
    else:
        session['entered_email'] = request.form['email']
        query = "INSERT INTO emails (email, date_entered) values(:email, NOW())"
        data = {
            'email' : request.form['email']
        }
        mysql.query_db(query, data)
        return redirect('/sucsess')

#Redirect to sucsess page with list of email addresses in DB
@app.route('/sucsess')
def show():
    allEmails = mysql.query_db("SELECT * FROM emails") 
    return render_template("sucsess.html", all_Emails = allEmails)

app.run(debug=True)