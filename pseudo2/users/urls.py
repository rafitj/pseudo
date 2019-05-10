from rest_framework import routers
from django.urls import path, include
from django.conf.urls import url, include
from .api import RegisterAPI, LoginAPI, UserViewSet, UserLoadAPI
from knox import views as knox_views

router = routers.DefaultRouter()
router.register('api/user/users', UserViewSet, 'users')

urlpatterns = [
    path('api/user', include('knox.urls')),
    path('', include(router.urls)),
    path('api/user/register', RegisterAPI.as_view()),
    path('api/user/load', UserLoadAPI.as_view()),
    path('api/user/login', LoginAPI.as_view()),
    path('api/user/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'^api/login/', include('rest_social_auth.urls_knox')),
]
