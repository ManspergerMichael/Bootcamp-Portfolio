from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

#counter for random word attempt counter
# Create your views here.
def random_word(request):
    if 'attempts' not in request.session:
        request.session['attempts'] = 0
    request.session['attempts'] +=1
    contains = {
        "word" : get_random_string(length = 14)
    }
    if request.method == "POST":
        return redirect("localhost:8000/random_word/")
    return render(request, "index.html", contains)
