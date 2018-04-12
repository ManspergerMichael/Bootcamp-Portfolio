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
    #flag for searching email table for entered email
    isEmailinDB = False
    #validate entered email is in db
    session['entered_email'] = request.form['email']
    if (EMAIL_REGEX.match(request.form['email'])):
        allEmails = mysql.query_db("SELECT * FROM emails")
        #if entered email is NOT in allEmails insert into db
        for email in allEmails:
            if request.form['email'] != email['email']:
                pass
            else:
                isEmailinDB = True
        if isEmailinDB == False:
            query = "INSERT INTO emails (email, date_entered) values(:email, NOW())"
            data = {'email' : request.form['email']}
            mysql.query_db(query, data)
            return redirect('/sucsess')
        else:
            return redirect('/sucsess')
    else:
        flash("Invalid email format, you twice baked moron!")
        return redirect('/')

#Redirect to sucsess page with list of email addresses in DB
@app.route('/sucsess')
def show():
    allEmails = mysql.query_db("SELECT * FROM emails") 
    return render_template("sucsess.html", all_Emails = allEmails)

app.run(debug=True)