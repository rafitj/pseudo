# Generated by Django 2.2 on 2019-05-04 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0006_auto_20190503_1959'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='content',
            field=models.CharField(default='Some Content!', max_length=700),
        ),
    ]
