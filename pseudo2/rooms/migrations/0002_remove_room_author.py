# Generated by Django 2.2 on 2019-05-01 00:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='author',
        ),
    ]
