from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from .forms import ChatImageForm


def index(request):
    return render(request, 'chat/index.html', {})


@login_required
def room(request, room_name):
    if request.method == 'POST':
        c_form = ChatImageForm(request.POST, request.FILES)
        if c_form.is_valid():
            c_form.save()
    else:
        c_form = ChatImageForm()

    return render(request, 'chat/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name)),
        'username': mark_safe(json.dumps(request.user.username)),
        'c_form': c_form
    })
