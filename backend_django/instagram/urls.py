from django.urls import path
from .views import scrape_instagram_hashtag

urlpatterns = [
    path("search/<str:hashtag>/", scrape_instagram_hashtag, name="search_hashtag"),
]
