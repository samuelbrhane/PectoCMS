import json
import os
from django.core.management.base import BaseCommand
from content.models import Word

class Command(BaseCommand):
    help = 'Load words and phrases from a local JSON file into the database'

    def handle(self, *args, **kwargs):
        file_path = os.path.join('data', 'sm1_new_kap1.json')  

        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                for item in data:
                    Word.objects.update_or_create(
                        id=item['id'],
                        defaults={
                            'word_first_lang': item['wordFirstLang'],
                            'sentence_first_lang': item.get('sentenceFirstLang', ''),
                            'word_second_lang': item['wordSecondLang'],
                            'sentence_second_lang': item.get('sentenceSecondLang', ''),
                        }
                    )
                self.stdout.write(self.style.SUCCESS('Successfully loaded data into the database.'))
        except FileNotFoundError:
            self.stdout.write(self.style.ERROR(f'File not found: {file_path}'))
        except json.JSONDecodeError:
            self.stdout.write(self.style.ERROR('Invalid JSON format.'))
