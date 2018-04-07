from flask import Flask, render_template, request, redirect,session
#importing random number generation and system time libaries
import random, datetime
app = Flask(__name__)
app.secret_key = "Bazinga!"


#landing page sets totalGold in session if not allready there
@app.route('/')
def landing():
    #Use these to clear the session when nessacary for testing
    #session['activity'] = ""
    #session['totalGold'] = 0
    if 'totalGold' not in session:
        session['totalGold'] = 0
        session['activity'] = ""
    return render_template("index.html")

#process_money route takes in a form request and processes the request baised on the 
#value passed in the form 'method' key.
@app.route('/process_money', methods=['POST'])
def getherGold():
    time =""
    htmlString =""
    if(request.form['method'] == 'farm'):
        farmedGold = random.randint(10,20)
        session['totalGold'] += farmedGold
        time = datetime.datetime.now()
        htmlString += "You earned {} gold, from the farm! ({})\n".format(farmedGold,time)
        session['activity'] += htmlString
    if(request.form['method'] == 'cave'):
        farmedGold = random.randint(5,10)
        session['totalGold'] += farmedGold
        time = datetime.datetime.now()
        htmlString += "You earned {} gold, from the cave! ({})\n".format(farmedGold,time)
        session['activity'] += htmlString
    if(request.form['method'] == 'house'):
        farmedGold = random.randint(2,5)
        session['totalGold'] += farmedGold
        time = datetime.datetime.now()
        htmlString += "You earned {} gold, from the house! ({})\n".format(farmedGold,time)
        session['activity'] += htmlString
    if(request.form['method'] == 'casino'):
        #print "in casino"
        #50/50 chance of winning at the casino, better odds than real life
        winOrLose = random.randint(0,1)
        #print "1 win 0 lose {}".format(winOrLose)
        farmedGold = random.randint(0,50)
        time = datetime.datetime.now()
        if(winOrLose == 0):
            session['totalGold']-= farmedGold
            htmlString += "You lost {} gold, at the casino! ({})\n".format(farmedGold,time)
            session['activity'] += htmlString
        elif(winOrLose == 1):
            session['totalGold']+= farmedGold
            htmlString += "You won {} gold, from the casino! ({})\n".format(farmedGold,time)
            session['activity'] += htmlString
    return redirect('/')





app.run(debug=True)