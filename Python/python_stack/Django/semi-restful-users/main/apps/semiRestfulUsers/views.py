from django.shortcuts import render, HttpResponse, redirect
from .models import users
from django.core.urlresolvers import reverse

# Create your views here.

def index(request):
    context = {
        "user":users.objects.all()
    }
    
    return render(request, 'index.html', context)
def show(request, methods="POST"):
    pass
def new(request, methods="POST"):
    responce = "placeholder for new user"
    return HttpResponse(responce)

def edit(request, methods="POST"):
    user = users.objects.get(id = request.POST['id'])
    user.first_name = request.POST['first_name']
    user.last_name = request.POST['last_name']
    user.email = request.POST['email']
    user.save()
    return redirect('target/semiRestfulUsers/index')
def delete(request, methods="POST"):
    pass