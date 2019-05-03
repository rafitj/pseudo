from rest_framework import serializers
from rooms.models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        creator = serializers.ReadOnlyField(source='creator.username')
        fields = '__all__'
