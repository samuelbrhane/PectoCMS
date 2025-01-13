from django.urls import path
from .views import WordListCreateView, WordRetrieveUpdateDestroyView

urlpatterns = [
    path('words/', WordListCreateView.as_view(), name='word-list-create'),  
    path('words/<int:pk>/', WordRetrieveUpdateDestroyView.as_view(), name='word-detail'),  
]
