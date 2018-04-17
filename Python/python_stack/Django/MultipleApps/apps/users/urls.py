from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^register', views.newRecord),
    url(r'^login', views.login),
    url(r'^new', views.newRecord),
    url(r'^users', views.users),
]