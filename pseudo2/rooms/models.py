from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Room(models.Model):
    creator = models.ForeignKey(User, related_name='creator', on_delete=models.CASCADE, null=True)
    title = models.CharField(unique=True, max_length=40)
    summary = models.CharField(max_length=300, default='Summarize me!')
    date_posted = models.DateTimeField(default=datetime.now, blank=True)
    Private = 'Private'
    Public = 'Public'
    Protected = 'Protected'
    categories = (
        (Public, 'Public'),
        (Private, 'Private'),
        (Protected, 'Protected'),
    )
    security = models.CharField(choices=categories, default='Public', max_length=10)
    members = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    archived = models.BooleanField(default=False)
