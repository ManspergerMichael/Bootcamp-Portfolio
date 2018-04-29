from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.core.urlresolvers import reverse
from django.contrib import messages
import bcrypt
# Create your views here.
def books(request):
    response = "Books placeholder"
    print request.session['id']
    return render(request, 'Reviews/books.html')

def add(request):
    response = "add review placeholder"
    return render(request, )
