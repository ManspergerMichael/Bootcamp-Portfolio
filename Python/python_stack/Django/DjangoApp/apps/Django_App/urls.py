from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
#url(r'^', views.index), # This means any URL passed in will go to index, don't use
url(r'^display', views.index),
url(r'^new', views.new),
url(r'^create', views.create),
url(r'^(?P<number>\d+$)', views.show),
url(r'^(?P<number>\d+)[\/][e][d][i][t]$', views.edit),
url(r'^(?P<number>\d+)[\/][d][e][l][e][t][e]$', views.destroy),
]
