from django.conf.urls import url
from . import views           
urlpatterns = [
    #give all url patterns a value to search for to prevent routing errors
    url(r'^index', views.landing, name ='landing'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^success/(?P<id>\d+)$', views.success, name='sucsess')
]

#/(?P<id>\d+)