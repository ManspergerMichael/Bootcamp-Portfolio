from django.shortcuts import render, HttpResponse, redirect
from .models import users
from django.core.urlresolvers import reverse

# Create your views here.

def index(request):
    context = {"user":users.objects.all()}
    return render(request, 'index.html', context)

def show(request, id, methods="POST"):
    context = {
        'user' : users.objects.get(id = id)
    }
    return render(request, 'show.html', context)

def create(request, methods="POST"):
    users.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'])
    return redirect(reverse('index'))

def new(request):
    return render(request, 'new.html')

def editPage(request, id, methods="POST"):
    context = {
        'user' : users.objects.get(id = id)
    }
    return render(request, 'edit.html', context)

def editprocess(request, id, methods="POST"):
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