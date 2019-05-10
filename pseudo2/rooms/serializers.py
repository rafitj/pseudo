from rest_framework import serializers, fields
from rooms.models import Room
from versatileimagefield.serializers import VersatileImageFieldSerializer


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        category_categories = (
            ('GS', 'General Software'),
            ('CC', 'Code Challenges'),
            ('D', 'Design (UI/UX)'),
            ('WD', 'Web Dev'),
            ('MD', 'Mobile Dev'),
            ('GD', 'Game Dev'),
            ('IT', 'Tech & IT'),
            ('AR', 'Art'),
            ('C', 'Casual'),
            ('AC', 'Academic'),
            ('O', 'Other')
        )
        room_image = VersatileImageFieldSerializer(
            sizes='room_image_renditions'
        )
        categories = fields.MultipleChoiceField(choices=category_categories)
        creator = serializers.ReadOnlyField(source='creator.username')
        fields = '__all__'
