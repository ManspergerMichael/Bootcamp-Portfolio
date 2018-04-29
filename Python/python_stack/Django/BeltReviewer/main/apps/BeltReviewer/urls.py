from django.conf.urls import url
from . import views           
urlpatterns = [
    #give all url patterns a value to search for to prevent routing errors
    url(r'^login', views.landing, name ='login'),
    url(r'^process', views.process, name ='process'),
]