# Generated by Django 2.2 on 2019-05-05 20:20

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0012_room_room_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room_image',
            field=versatileimagefield.fields.VersatileImageField(default='room_pic_hashed/default_room_image.jpg', upload_to='room_pic_hashed'),
        ),
    ]
