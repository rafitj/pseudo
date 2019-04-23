from django.shortcuts import render, redirect, reverse
from django.contrib.auth.forms import UserCreationForm, AdminPasswordChangeForm, PasswordChangeForm
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm, UserContactUpdateForm, UsernameUpdateForm, UserBioUpdateForm, UserDescUpdateForm, ProfileUpdateForm
# Create your views here.
from social_django.models import UserSocialAuth
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect


def login(request):
    login_form = AuthenticationForm
    context = {
        'login_form': login_form
    }
    html_form = render_to_string('users/index.html', context, request=request)
    return JsonResponse({'html_form': html_form})


def register(request):
    if request.method == 'POST':
        r_form = UserRegisterForm(request.POST)

        if r_form.is_valid():
            r_form.save()
            username = r_form.cleaned_data.get('username')
            messages.success(request, "Account created for " + str(username) + "!")
            return redirect('login')
    else:
        r_form = UserRegisterForm()
    return render(request, 'users/register.html', {'r_form': r_form})


@login_required
def settings(request):
    user = request.user

    try:
        github_login = user.social_auth.get(provider='github')
    except UserSocialAuth.DoesNotExist:
        github_login = None

    try:
        twitter_login = user.social_auth.get(provider='twitter')
    except UserSocialAuth.DoesNotExist:
        twitter_login = None

    try:
        facebook_login = user.social_auth.get(provider='facebook')
    except UserSocialAuth.DoesNotExist:
        facebook_login = None

    can_disconnect = (user.social_auth.count() > 1 or user.has_usable_password())

    return render(request, 'users/settings.html', {
        'github_login': github_login,
        'twitter_login': twitter_login,
        'facebook_login': facebook_login,
        'can_disconnect': can_disconnect
    })


@login_required
def password(request):
    if request.user.has_usable_password():
        PasswordForm = PasswordChangeForm
    else:
        PasswordForm = AdminPasswordChangeForm

    if request.method == 'POST':
        form = PasswordForm(request.user, request.POST)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            messages.success(request, 'Your password was successfully updated!')
            return redirect('password')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordForm(request.user)
    return render(request, 'users/password.html', {'form': form})


@login_required
def profile(request):
    message = ''
    if request.method == 'POST':
        u_form = UsernameUpdateForm(request.POST, instance=request.user)
        b_form = UserContactUpdateForm(request.POST, instance=request.user.profile)
        c_form = UserBioUpdateForm(request.POST, instance=request.user.profile)
        d_form = UserDescUpdateForm(request.POST, instance=request.user.profile)
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid() and c_form.is_valid():
            u_form.save()
            p_form.save()
            c_form.save()
            b_form.save()
            d_form.save()
            context = {'message': "Profile Updated!"}
            return render(request, 'users/profile_view.html', context)
            # return redirect('profile_view')
    else:
        u_form = UsernameUpdateForm(instance=request.user)
        b_form = UserBioUpdateForm(instance=request.user.profile)
        d_form = UserDescUpdateForm(instance=request.user.profile)
        c_form = UserContactUpdateForm(instance=request.user.profile)
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
    context = {'u_form': u_form, 'p_form': p_form,
               'b_form': b_form, 'd_form': d_form, 'c_form': c_form}
    return render(request, 'users/profile.html', context)


@login_required
def profile_view(request):
    user = request.user
    context = {
        'user': user
    }
    return render(request, 'users/profile_view.html', context)
