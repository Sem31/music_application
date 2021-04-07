from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

createUser = CreateUser.as_view({
    'post': 'create'
})

getUsersList = CreateUser.as_view({
    'get': 'list'
})

createUser1 = CreateUser.as_view({
    'get':'retrieve',
    'delete':'destroy',
    'put':'update',
    'patch':'partial_update'
})

music = SongUploaderView.as_view({
    'get': 'list',
    'post': 'create'
})
music1 = SongUploaderView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    path('signup_user/', createUser),
    path('get_user_list/', getUsersList),
    path('signup_user/<int:pk>', createUser1),
    path('login_user/',LoginUser.as_view()),
    path('songs_api/', music),
    path('songs_api/<int:pk>', music1),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)