from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.core.urlresolvers import reverse
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
import bcrypt

# Create your views here.
def landing(request):
    print "homepage"
    return render(request, 'login.html')

def register(request, methods="POST"):
    print "Im in register!"
    errors = users.objects.user_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "I found an error message"
            messages.error(request, error, extra_tags=tag)#this creates the key value pais for error messages
        return redirect('/index')
    else:
        #encript password
        hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        #print hash1
        users.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'], password = request.POST['password'], salt = hash1)
        
        this_user = users.objects.get(email = request.POST['email'])
        id = this_user.id
    return redirect('sucsess', id =id)

def login(request, methods="POST"):
    user_email = request.POST['email']
    password = request.POST['password']
    errors = users.objects.user_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "I found an error message"
            messages.error(request, error, extra_tags=tag)#this creates the key value pais for error messages
        return redirect('/index')
    else:
        this_user = users.objects.get(email = user_email)
        id = this_user.id
        return redirect('sucsess', id = id)


def success(request,id):
    context = {
        'user' : users.objects.get(id =id)
    }
    return render(request, 'success.html',context)