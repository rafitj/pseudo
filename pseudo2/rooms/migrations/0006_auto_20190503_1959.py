# Generated by Django 2.2 on 2019-05-03 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0005_room_archived'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='tags',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='room',
            name='type',
            field=models.CharField(choices=[('Question', 'Question'), ('Advice', 'Advice'), ('Discussion', 'Discussion')], default='Question', max_length=15),
        ),
    ]