# Generated by Django 2.2 on 2019-05-08 21:49

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_auto_20190505_0202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_image',
            field=versatileimagefield.fields.VersatileImageField(default='profile_pic_hashed/default_profile_image.jpg', upload_to='profile_pic_hashed'),
        ),
    ]