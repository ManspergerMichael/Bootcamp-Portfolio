from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
url(r'^$', views.random_word),     # This line has changed!
url(r'^reset', views.random_word)
]
