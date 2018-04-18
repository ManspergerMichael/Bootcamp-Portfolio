from django.shortcuts import render, redirect
import random, datetime


# Create your views here.
def game(request):
    if 'totalGold' and 'activityList' not in request.session:
        request.session['totalGold'] = 0
        request.session['activityList'] = []
    return render(request, 'NinjaGold.html')

def process_money(request, methods="POST"):
    #request.session['activityList'] = []
    if request.POST['method'] == 'farm':
        gold = random.randint(10,20)
        request.session['totalGold'] += gold
        message = "You earned "+str(gold)+" at the farm!"
        
    
    if request.POST['method'] == 'cave':
        gold = random.randint(5,10)
        request.session['totalGold'] += gold
        message = "You earned "+str(gold)+" at the cave!"

    if request.POST['method'] == 'house':
        gold = random.randint(2,5)
        request.session['totalGold'] += gold
        message = "You earned "+str(gold)+" at the house!"
        
    
    if request.POST['method'] == 'casino':
        isAWin = random.randint(0,1)
        gold = random.randint(0,50)
        if isAWin == 0:
            request.session['totalGold'] += gold
            message = "You won "+str(gold)+" at the casino!"
        else:
            request.session['totalGold'] -= gold
            message = "You lost "+str(gold)+" at the casino!"

    time = str(datetime.datetime.now())

    activity = {
        'message' : message,
        'time': time
    }

    request.session['activityList'].append(activity)
    request.session.modified = True

    return redirect('/NinjaGold')