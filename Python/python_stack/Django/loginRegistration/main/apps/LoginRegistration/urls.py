from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^', views.landing, 'landing'),
    url(r'^register$', views.success, 'register'),
    url(r'^login$', views.success, 'login'),
    url(r'^success/(?P<id>\d+)$', views.success, 'sucsess')
]

