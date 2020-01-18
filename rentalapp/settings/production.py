from rentalapp.settings.common import *


SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
DEBUG = False
print(f'>>> DEBUG: {DEBUG}')

# SECURITY WARNING: update this when you have the production host
ALLOWED_HOSTS = ['0.0.0.0', 'localhost']


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}