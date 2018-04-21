from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.core.urlresolvers import reverse
from django.contrib import messages

# Create your views here.
def landing(request):
    return render(request, 'login.html')

def register(request, methods="POST"):
    #process user data sent by login.html
    #redirect to succsess page with user id
    #return redirect('success.html', id)
    pass
def login(request, methods="POST"):
    #find user email
    #get user id
    #return redirect('success.html', id)
    pass


def success(request,id):
    context = {
        'test' : "test"
    }
    return render(request, 'success.html', context)