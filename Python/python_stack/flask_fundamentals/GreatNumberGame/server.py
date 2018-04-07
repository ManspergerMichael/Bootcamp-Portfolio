from flask import Flask, render_template, request, redirect,session
import random
app = Flask(__name__)
app.secret_key = "Bazinga!"


@app.route('/')
def intro():
    if 'answer' not in session:
        session['answer']= random.randint(1,100)
    return render_template('index.html')
@app.route('/again')
def again():
    session.pop('result')
    session['answer']= random.randint(1,100)
    return render_template('index.html')
@app.route('/process', methods=['POST'])
def game_logic():
    print session['answer'] 
    guess = request.form['guess']
    print guess
    session['result'] = ""
    if(int(guess) > int(session['answer'])):
        print "high"
        session['result'] =  "Too High!"
    elif(int(guess) < int(session['answer'])):
        print "low"
        session['result'] = "Too Low!"
    elif(int(guess) == int(session['answer'])):
        print "win"
        session['result'] = str(session['answer']) + "Was the answer! You win!"
        
    return render_template('index.html')

app.run(debug=True)