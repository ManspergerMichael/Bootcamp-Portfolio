from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
import re, bcrypt

NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class usersManager(models.Manager):
    def user_validator(self, postData):
        #errors dictionary for passing error messages to template
        errors ={}
        #validation
        if postData['type'] == 'register':
            print "Register validation"
            try:
                test = users.objects.get(email = postData['email'])
            except Exception:
                errors['Email error'] = 'Email address is allready registered'
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
            if postData['password'] != postData['Confirm_pw']:
                errors['Password'] = 'Passwords do not match'
            if len(postData['password']) < 8:
                errors['Password Length'] = "Password should be longer than 8 characters"
        
        elif postData['type'] == 'login':
            print "login validation"
            try:
                test = users.objects.get(email = postData['email'])
            except ObjectDoesNotExist:
                errors['Email error'] = 'Email address is not registered'
            test = users.objects.get(email = postData['email'])
            if not bcrypt.checkpw(postData['password'].encode(), test.salt.encode()):
                errors['Password Error'] ='Password is invalid'
        
        
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

