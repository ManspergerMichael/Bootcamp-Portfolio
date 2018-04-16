from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from time import gmtime, strftime
from django.utils.crypto import get_random_string

# the index function is called when root is visited
def index(request):
    #response = "This is the Time_display app."
    #return HttpResponse(response)
    context = {
        "time" : strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request, "time_display/timeDisplay.html", context)
