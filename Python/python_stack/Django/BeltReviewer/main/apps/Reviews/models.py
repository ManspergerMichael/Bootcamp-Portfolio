from __future__ import unicode_literals
from ..BeltReviewer.models import user
from django.db import models

# Create your models here.
class book(models.Model):
    title = models.CharField(max_length=255)
    def __reper__():
        print self.title

class author(models.Model):
    full_name = models.CharField(max_length =255)
    book = models.ForeignKey(book, related_name ="author")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class review(models.Model):
    review = models.TextField()
    book = models.ForeignKey(book, related_name="review")
    user = models.ManyToManyField(user, related_name="reviewer")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)