from django.conf.urls import url
from . import views           
urlpatterns = [
url(r'^$', views.index, name='index'),
url(r'^users/(?P<id>\d+)$', views.show, name='show'),
url(r'^users/new$', views.new, name='new'),
url(r'^users/create$', views.create, name='create'),
url(r'^users/(?P<id>\d+)/edit$', views.editPage, name='editPage'),
url(r'^users/(?P<id>\d+)/editProcess$', views.editprocess, name='editprocess'),
url(r'^users/(?P<id>\d+)/delete$', views.delete, name='delete'),
]