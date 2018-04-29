from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.core.urlresolvers import reverse
from django.contrib import messages
import bcrypt

# Create your views here.
def landing(request):
    if 'id' not in request.session:
        request.session['id'] = 0
    else:
        request.session['id'] = 0
    return render(request, "landing.html")

def process(request, methods="POST"):
    errors = user.objects.user_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/login')
    else:
        this_user = user.objects.get(email = request.POST['email'])
        request.session['id'] = this_user.id
        print request.session['id']
        context = {
            'user' : this_user
        }
        return render(request, 'Reviews/books.html', context)