from .api import ProfileViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/profiles', ProfileViewSet, 'profiles')

urlpatterns = router.urls
