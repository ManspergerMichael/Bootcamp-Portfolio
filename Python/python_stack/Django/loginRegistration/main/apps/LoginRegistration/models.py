from __future__ import unicode_literals

from django.db import models
import re

NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class usersManager(models.Manager):
    def user_validator(self, postData):
        #errors dictionary for passing error messages to template
        errors ={
            
        }
        #validation
        if len(postData['first_name'])< 2:
            errors['first_name'] = "First name should be more than 2 characters"
            print "I found a validation error"
        if len(postData['last_name'])< 2:
            errors['Last Name'] = "Llast name should be more than 2 characters"
            print "I found a validation error"
        if not NAME_REGEX.match(postData['first_name']):
            errors['First name Format'] = "First name can only have characters"
            print "I found a validation error"
        if not NAME_REGEX.match(postData['last_name']):
            errors["Last Name Format"] = "Last name can only have characters"
            print "I found a validation error"
        if not EMAIL_REGEX.match(postData['email']):
            errors['Email Format'] = "Email is not in proper format"
            print "I found a validation error"
        if len(postData['password']) < 8:
            errors['Password Length'] = "Password should be longer than 8 characters"
        
        return errors


class users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    salt = models.CharField(max_length=255)
    
    def __repr__():
        print self.first_name, self.last_name, self.email, self.password, self.salt
    #this includes the users manager object in the user object, extends the functionality of the object
    objects = usersManager()

