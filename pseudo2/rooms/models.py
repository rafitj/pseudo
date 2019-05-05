from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from multiselectfield import MultiSelectField


class Room(models.Model):
    creator = models.ForeignKey(User, related_name='creator', on_delete=models.CASCADE, null=True)
    title = models.CharField(unique=True, max_length=40)
    summary = models.CharField(max_length=300, default='Summarize me!')
    content = models.CharField(max_length=700, default='Some Content!')
    date_posted = models.DateTimeField(default=datetime.now, blank=True)
    Private = 'Private'
    Public = 'Public'
    Protected = 'Protected'
    security_categories = (
        (Public, 'Public'),
        (Private, 'Private'),
        (Protected, 'Protected'),
    )
    security = models.CharField(choices=security_categories, default='Public', max_length=10)
    Question = 'Question'
    Advice = 'Advice'
    Discussion = 'Discussion'
    type_categories = (
        (Question, 'Question'),
        (Advice, 'Advice'),
        (Discussion, 'Discussion'),
    )
    type = models.CharField(choices=type_categories, default='Question', max_length=15)
    category_categories = (
        ('GS', 'General Software'),
        ('CC', 'Code Challenges'),
        ('D', 'Design (UI/UX)'),
        ('WD', 'Web Dev'),
        ('MD', 'Mobile Dev'),
        ('GD', 'Game Dev'),
        ('IT', 'Tech & IT'),
        ('AR', 'Art'),
        ('C', 'Casual'),
        ('AC', 'Academic'),
        ('O', 'Other')
    )
    categories = MultiSelectField(choices=category_categories,
                                  max_choices=3, default=['O'])
    members = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    archived = models.BooleanField(default=False)
