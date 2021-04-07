from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import FileExtensionValidator

# Create your models here.


class User(AbstractUser):
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=30, blank=True)
    profile_pic = models.ImageField(blank=True, null=True, upload_to='./profile/',
                                    validators=[FileExtensionValidator(allowed_extensions=['jpg', 'png'])])
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.username


class SongDetail(models.Model):
    song_name = models.CharField(max_length=100)
    singer_name = models.CharField(max_length=100)
    album_name = models.CharField(max_length=100)
    upload_song = models.FileField(upload_to='./songs/', validators=[FileExtensionValidator(allowed_extensions=['mp3'])])

    def __str__(self):
        return self.song_name
