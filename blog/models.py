from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from PIL import Image
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=80)
    summary = models.CharField(max_length=200, default='Summarize me!')
    content = models.TextField()
    date_posted = models.DateTimeField()
    author = models.ForeignKey(User, related_name='author', on_delete=models.CASCADE)
    contributors = models.ManyToManyField(User, related_name='contributors', null=True)
    likes = models.PositiveIntegerField(default=1)
    views = models.PositiveIntegerField(default=1)
    # languages = models.TypedMultipleChoiceField()
    git_link = models.URLField(default='https://github.com/repositories')
    project_image = models.ImageField(default='default_project_image.png', upload_to='project_pics')

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
