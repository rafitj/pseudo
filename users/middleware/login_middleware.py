from django.shortcuts import render, redirect, reverse
from django.contrib.auth.forms import UserCreationForm, AdminPasswordChangeForm, PasswordChangeForm
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
# from users.forms import UserRegisterForm, UserContactUpdateForm, UsernameUpdateForm, UserBioUpdateForm, UserDescUpdateForm, ProfileUpdateForm
# Create your views here.
from social_django.models import UserSocialAuth
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect


class LoginFormMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_request(self, request):

        # if the top login form has been posted
        if request.method == 'POST' and 'is_top_login_form' in request.POST:

            # validate the form
            form = AuthenticationForm(data=request.POST)
            if form.is_valid():

                # log the user in
                from django.contrib.auth import login
                login(request, form.get_user())

                # if this is the logout page, then redirect to /
                # so we don't get logged out just after logging in
                if '/logout/' in request.get_full_path():
                    return HttpResponseRedirect('/')

        else:
            form = AuthenticationForm(request)

        # attach the form to the request so it can be accessed within the templates
        request.login_form = form
