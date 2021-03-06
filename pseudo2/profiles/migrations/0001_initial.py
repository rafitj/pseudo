# Generated by Django 2.2 on 2019-05-04 17:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import versatileimagefield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.CharField(default='Profile Bio', max_length=40)),
                ('description', models.TextField(default='Profile Description', max_length=300)),
                ('github', models.URLField(default='')),
                ('website', models.URLField(default='')),
                ('profile_image', versatileimagefield.fields.VersatileImageField(default='default.jpg', upload_to='profile_pics')),
                ('skills', models.CharField(default='', max_length=40)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
