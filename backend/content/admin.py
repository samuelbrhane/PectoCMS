from django.contrib import admin
from .models import Word

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    list_display = ('id', 'word_first_lang', 'word_second_lang')
    search_fields = ('word_first_lang', 'word_second_lang')
    list_per_page = 25  
