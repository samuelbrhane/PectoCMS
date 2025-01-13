from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Word
from .serializers import WordSerializer
from .pagination import CustomPageNumberPagination

# List, search, filter, paginate, and create new words
class WordListCreateView(generics.ListCreateAPIView):
    queryset = Word.objects.all().order_by('-id')
    serializer_class = WordSerializer
    pagination_class = CustomPageNumberPagination 

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['word_first_lang', 'sentence_first_lang', 'word_second_lang', 'sentence_second_lang']
    filterset_fields = ['word_first_lang', 'word_second_lang']
    ordering_fields = ['id', 'word_first_lang', 'word_second_lang']
    ordering = ['-id']


# Retrieve, update, or delete a single word
class WordRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer
