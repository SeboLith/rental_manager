from rentalapp.settings.common import *


SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
# SECURITY WARNING: don't run with debug turned on in production!
# Set to `True` for requests from `http://localhost:3000`
# When set to `False`, run `python manage.py runserver --insecure` locally to serve static files
DEBUG = os.environ.get('DJANGO_DEBUG') != ''
print(f'>>> DEBUG: {DEBUG}')


# SECURITY WARNING: update this when you have the production host
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}