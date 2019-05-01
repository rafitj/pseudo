from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.


class Room(models.Model):
    author = models.ForeignKey(User, related_name='author', on_delete=models.CASCADE, null=True)
    title = models.CharField(unique=True, max_length=40)
    summary = models.CharField(max_length=300, default='Summarize me!')
    date_posted = models.DateTimeField(default=datetime.now, blank=True)
