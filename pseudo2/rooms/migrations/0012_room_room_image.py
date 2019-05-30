# Generated by Django 2.2 on 2019-05-05 20:16

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0011_auto_20190504_1753'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='room_image',
            field=versatileimagefield.fields.VersatileImageField(default='default_room_image.jpg', upload_to='room_pic_hashed'),
        ),
    ]