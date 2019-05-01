from rooms.models import Room
from rest_framework import viewsets, permissions
from .serializers import RoomSerializer


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = RoomSerializer

    # def get_queryset(self):
    #     return self.request.user.rooms.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
