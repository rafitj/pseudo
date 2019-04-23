from django.contrib import admin
from .models import Profile
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm


class MyUserCreationForm(UserCreationForm):
    username = forms.RegexField(
        label='Username',
        max_length=30,
        regex=r'^[\w-]+$',
        help_text='Required. 30 characters or fewer. Alphanumeric characters only (letters, digits, hyphens and underscores).'
    )


class MyUserChangeForm(UserChangeForm):
    username = forms.RegexField(
        label='Username',
        max_length=30,
        regex=r'^[\w-]+$',
        help_text='Required. 30 characters or fewer. Alphanumeric characters only (letters, digits, hyphens and underscores).'
    )


class MyUserAdmin(UserAdmin):
    form = MyUserChangeForm
    add_form = MyUserCreationForm


admin.site.register(Profile)

admin.site.unregister(User)
admin.site.register(User, MyUserAdmin)
