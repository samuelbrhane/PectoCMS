from rest_framework import serializers
from .models import Word

class WordSerializer(serializers.ModelSerializer):
    wordFirstLang = serializers.CharField(source='word_first_lang')
    sentenceFirstLang = serializers.CharField(source='sentence_first_lang', allow_blank=True, allow_null=True)
    wordSecondLang = serializers.CharField(source='word_second_lang')
    sentenceSecondLang = serializers.CharField(source='sentence_second_lang', allow_blank=True, allow_null=True)

    class Meta:
        model = Word
        fields = ['id', 'wordFirstLang', 'sentenceFirstLang', 'wordSecondLang', 'sentenceSecondLang']
