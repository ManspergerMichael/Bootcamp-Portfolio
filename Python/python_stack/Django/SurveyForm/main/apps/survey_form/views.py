from django.shortcuts import render,HttpResponse, redirect

# Create your views here.
def survey(request):
    #print "Got here!"
    return render(request,"survey.html")
def result(request, methods="POST"):
    if request.method =='POST':
    #print "Result page"
    #print request.POST['name']
    #print request.POST['location']
    #print request.POST['language']
    #print request.POST['comment']
    
        data = {
            'name' : request.POST['name'],
            'location' : request.POST['location'],
            'language' : request.POST['language'],
            'comment' : request.POST['comment']
        } 
    
    return render(request, "result.html", data)
