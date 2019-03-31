from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import ChatImages
from string import Template
from django.utils.safestring import mark_safe
from django.forms import ClearableFileInput


class ChatImageForm(forms.ModelForm):
    chat_image = forms.FileField(label="", widget=forms.ClearableFileInput(
        attrs={
            'class': ''
        }
    )
    )

    class Meta:
        model = ChatImages
        fields = ['chat_image']
