from django.shortcuts import render, redirect
from time import gmtime, strftime

# Create your views here.
def index(request):
    return render(request, "Session_Words/index.html")

def result(request, methods="POST"):
    #if 'listOfWords' not in request.session:
    #    request.session['listOfWords'] = []
    print request.POST['word']
    print request.POST['color'] 
    #print request.POST['checkbox'] 
    font = request.POST.get('checkbox', 'off')
    print font
    if font == 'on':
        fontSize = 20
    elif font == 'off':
        fontSize = 14

    word = {'word' : request.POST['word'],
            'color' : request.POST['color'],
            'font' : fontSize,
            'time' : strftime("%m-%D %H:%M %p", gmtime())
            }

    request.session['listOfWords'].append(word)
    print request.session['listOfWords']    
    #request.session['HTML'] += "<span style='color:"+request.POST['color']+"' size='"+str(fontSize)+"'>"+ request.POST['word']+"</span><br>"
    request.session.modified = True
    return render(request,"Session_Words/index.html")

def clear(request, methods="POST"):
    print "Clear!"
    request.session['listOfWords'] =[]
    request.session['HTML']=""
    return redirect("/session_words/index")
