# Generated by Django 4.2.11 on 2024-03-07 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0012_majorprojectsinfomodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='resumeuploadmodel',
            name='video_resume',
            field=models.FileField(blank=True, upload_to='resume/video_cv/'),
        ),
        migrations.AlterField(
            model_name='resumeuploadmodel',
            name='resume',
            field=models.FileField(blank=True, upload_to='resume/'),
        ),
    ]
