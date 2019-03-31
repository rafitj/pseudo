from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=40, default='Profile Bio')
    description = models.TextField(max_length=300, default='Profile Description')
    github = models.URLField(default='')
    website = models.URLField(default='')
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    skills = models.CharField(max_length=40, default='')

    def __str__(self):
        return str(self.user.username) + 'Profile'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)


class Follower(models.Model):
    users = models.ManyToManyField(User)
    current_user = models.ForeignKey(User, related_name='owner',
                                     null=True, on_delete=models.CASCADE)

    @classmethod
    def make_follow(cls, curr_user, new_follow):
        follower, created = cls.objects.get_or_create(
            current_user=curr_user
        )
        follower.users.add(new_follow)
