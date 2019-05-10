from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from versatileimagefield.fields import VersatileImageField
import uuid


def profile_pic_hashed(instance, filename):
    return "{}.{}".format(uuid.uuid4(), filename.split(".")[-1])


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    bio = models.CharField(max_length=150, default='Profile Bio')
    title = models.CharField(max_length=50, default='Profile Title')
    github = models.URLField(default='')
    website = models.URLField(default='')
    profile_image = VersatileImageField(
        default='profile_pic_hashed/default_profile_image.jpg', upload_to='profile_pic_hashed')
    skills = models.CharField(max_length=200, default='')

    def __str__(self):
        return str(self.user.username) + 'Profile'

    # def save(self, *args, **kwargs):
    #     super().save(*args, **kwargs)
    #     img = Image.open(self.profile_image.path)
    #     if img.height > 300 or img.width > 300:
    #         output_size = (300, 300)
    #         img.thumbnail(output_size)
    #         img.save(self.profile_image.path)


# class Follower(models.Model):
#     users = models.ManyToManyField(User)
#     current_user = models.ForeignKey(User, related_name='owner',
#                                      null=True, on_delete=models.CASCADE)
#
#     @classmethod
#     def make_follow(cls, curr_user, new_follow):
#         follower, created = cls.objects.get_or_create(
#             current_user=curr_user
#         )
#         follower.users.add(new_follow)
