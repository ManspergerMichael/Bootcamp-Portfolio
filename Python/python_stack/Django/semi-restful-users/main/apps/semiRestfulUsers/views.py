from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.core.urlresolvers import reverse
from django.contrib import messages

# Create your views here.

def index(request):
    context = {"user":users.objects.all()}
    return render(request, 'index.html', context)

def show(request, id):
    context = {
        'user' : users.objects.get(id = id)
    }
    return render(request, 'show.html', context)

def create(request, methods="POST"):
    errors = users.objects.user_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "I found an error message"
            messages.error(request, error, extra_tags=tag)#errors[tag].
        return redirect('new')
    else:
        users.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])
        this_user = users.objects.get(email = request.POST['email'])
        id = this_user.id
        return redirect('show', id)

def new(request):
    return render(request, 'new.html')

def editPage(request, id):
    context = {
        'user' : users.objects.get(id = id)
    }
    return render(request, 'edit.html', context)

def editprocess(request, id, methods="POST"):
    errors = users.objects.user_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "I found an error message"
            messages.error(request, error, extra_tags=tag)#errors[tag].
        return redirect('show', id =id)
    else:
        this_user = users.objects.get(id = id)
        this_user.first_name = request.POST['first_name']
        this_user.last_name = request.POST['last_name']
        this_user.email = request.POST['email']
        this_user.save()
        return redirect(reverse('index'))
def delete(request, id):
    this_user = users.objects.get(id = id)
    this_user.delete()
    return redirect(reverse('index'))