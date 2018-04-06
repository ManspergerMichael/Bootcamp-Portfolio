from flask import Flask, render_template, request, redirect,session
import random
app = Flask(__name__)
app.secret_key = "Bazinga!"

@app.route('/')
def index():
    if ('wins' not in session):
        session['wins'] =0
    if ('losses' not in session):
        session['losses'] =0
    if ('losses' not in session):
        session['ties'] =0
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def play():
   #playerSelect = [request.form['rock'],request.form['paper'],request.form['scissors']]
   playerSelect = request.form['playerSelect']
   aiSelect = random.randint(1,3)
   aiResult = ""
   
   if(aiSelect == 1):
       aiResult = "paper"
   if(aiSelect == 2):
       aiResult = "rock"
   if(aiSelect == 3):
       aiResult = "scissors"

   if(playerSelect == "paper" and aiResult == "scissors"):
       #print "AI wins"
       session['losses'] +=1
       session['message'] = "YOU LOSE SIR, GOOD DAY!"
   if(playerSelect == "paper" and aiResult == "rock"):
       #print "User wins"
       session['wins'] +=1
       session['message'] = "A WINNER IS YOU!"
   if(playerSelect == "scissors" and aiResult == "paper"):
       #print "User wins"
       session['wins'] +=1
       session['message'] = "A WINNER IS YOU!"
   if(playerSelect == "scissors" and aiResult == "rock"):
       #print "AI wins"
       session['losses'] +=1
       session['message'] = "YOU LOSE SIR, GOOD DAY!"
   if(playerSelect == "rock" and aiResult == "paper"):
       #print "AI wins"
       session['losses'] +=1
       session['message'] = "YOU LOSE SIR, GOOD DAY!"
   if(playerSelect == "rock" and aiResult == "scissors"):
       #print "User wins"
       session['wins'] +=1
       session['message'] = "A WINNER IS YOU!"
   if(playerSelect == aiResult):
       #print "Tie."
       session['ties'] +=1
       session['message'] = "A DISGRACSEFUL TIE!"
   
   return redirect('/') 
app.run(debug=True)

'''
demonstrated code
@app.rout('/<choice>')
def game_logic(choice):
    print "You picked {}".format(choice)
    #Game logic:
    #user selects choice, the same inputs are the keys to the dictionary
    #server generates a random number 0-2, that mach the index values of the lists in the dictionary
    #
    rand = random.randint(0,2)
    choices = ['rock','paper','scissors']
    dictionary = {
        'rock':['tied','lost','won'],
        'paper':['won','tied','lost'],
        'scissors':['lost','won','tied']
    }
    if not session.get('wins'):
        session['wins'] = 0
        session['losses'] = 0
        session['ties'] = 0
    game = dictionary[choice][rand]
    print "The computer picked {}".format(choices[rand])
    return redirect('/')
'''