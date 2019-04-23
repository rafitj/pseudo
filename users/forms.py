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


class UserContactUpdateForm(forms.ModelForm):
    email = forms.EmailField(required=False, label='', widget=forms.EmailInput(
        attrs={
            'class': 'my-form-control col-md-12',
            'placeholder': 'Email',
            'autocomplete': 'off'
        }
    ))
    github = forms.URLField(required=False, label='', widget=forms.URLInput(
        attrs={
            'class': 'my-form-control col-md-12',
            'placeholder': 'Github',
            'autocomplete': 'off'
        }
    ))
    website = forms.URLField(required=False, label='', widget=forms.URLInput(
        attrs={
            'class': 'my-form-control col-md-12',
            'placeholder': 'Website',
            'autocomplete': 'off'
        }
    ))

    class Meta:
        model = Profile
        fields = ['email', 'github', 'website']


class UsernameUpdateForm(forms.ModelForm):
    username = forms.CharField(label='', widget=forms.TextInput(
        attrs={
            'class': 'my-form-control profile-name-edit',
            'placeholder': 'Username',
            'maxlength': '20',
            'autocomplete': 'off'
        }))

    class Meta:
        model = User
        fields = ['username']


class UserDescUpdateForm(forms.ModelForm):
    description = forms.CharField(label='', widget=forms.Textarea(
        attrs={
            'class': 'my-form-control profile-description-edit textarea',
            'placeholder': 'Profile Summary',
            'maxlength': '200',
            'cols': '40',
            'rows': '5',
            'autocomplete': 'off'
        }))

    class Meta:
        model = Profile
        fields = ['description']


class UserBioUpdateForm(forms.ModelForm):
    bio = forms.CharField(label='', widget=forms.TextInput(
        attrs={
            'class': 'my-form-control profile-bio',
            'placeholder': 'Profile Bio',
            'maxlength': '40',
            'autocomplete': 'off'
        }))

    class Meta:
        model = Profile
        fields = ['bio']


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
