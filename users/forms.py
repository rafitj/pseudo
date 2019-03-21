from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from string import Template
from django.utils.safestring import mark_safe
from django.forms import ClearableFileInput


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField(label='', widget=forms.EmailInput(
        attrs={
            'class': 'my-form-control col-md-12',
            'placeholder': 'Email',
            'maxlength': '20',
            'autocomplete': 'off'
        }
    ))
    username = forms.CharField(label='', widget=forms.TextInput(
        attrs={
            'class': 'my-form-control account-heading col-md-12 ',
            'placeholder': 'Username',
            'maxlength': '20',
            'autocomplete': 'off'
        }))

    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    image = forms.FileField(label="", widget=forms.ClearableFileInput(
        attrs={
            'class': ''
        }
    )
    )

    class Meta:
        model = Profile
        fields = ['image']

# class ImageWidget(forms.ClearableFileInput):
#     input_type = 'image'
#
#
# class ProfileUpdateForm(forms.ModelForm):
#     image = forms.ImageField(widget=ImageWidget())
#     image.widget.attrs["value"] = 'Upload'
#
#     class Meta:
#         model = Profile
#         fields = ['image']
