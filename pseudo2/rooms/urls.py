from .api import RoomViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/rooms', RoomViewSet, 'rooms')

urlpatterns = router.urls
