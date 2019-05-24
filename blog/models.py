from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from PIL import Image
# Create your models here.
from multiselectfield import MultiSelectField
from datetime import datetime


class Post(models.Model):
    author = models.ForeignKey(User, related_name='author', on_delete=models.CASCADE)
    title = models.CharField(max_length=40)
    summary = models.CharField(max_length=300, default='Summarize me!')
    security = models.CharField(max_length=300, default='Public')
    content = models.TextField()
    date_posted = models.DateTimeField(default=datetime.now, blank=True)
    likes = models.PositiveIntegerField(default=0)
    users = models.PositiveIntegerField(default=1)

    project_image = models.ImageField(
        default='default_project_image.png', upload_to='project_pics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.project_image.path)
        if img.height > 1920 or img.width > 1080:
            output_size = (1920, 1080)
            img.thumbnail(output_size)
            img.save(self.image.path)
