from rooms.models import Room
from rest_framework import viewsets, permissions, generics
from .serializers import RoomSerializer
from rooms.permissions import IsOwnerOrReadOnly


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
