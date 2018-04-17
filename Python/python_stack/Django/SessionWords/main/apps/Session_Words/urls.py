from django.conf.urls import url
from . import views           
urlpatterns = [
url(r'^index$', views.index),
url(r'^result$', views.result),
url(r'^clear$', views.clear)       
]
