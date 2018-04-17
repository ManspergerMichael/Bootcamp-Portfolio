from django.conf.urls import url
from . import views           
urlpatterns = [
url(r'^', views.index),
url(r'^display', views.index),
url(r'^new', views.new),
url(r'^create', views.create),
url(r'^(?P<number>\d+$)', views.show),
url(r'^(?P<number>\d+)[\/][e][d][i][t]$', views.edit),
url(r'^(?P<number>\d+)[\/][d][e][l][e][t][e]$', views.destroy),
]
