"""
Django settings for rentalapp project.

Generated by 'django-admin startproject' using Django 3.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from rentalapp.settings.helpers import load_static_asset_manifest

# Build paths inside the project like this: os.path.join(ROOT_DIR, ...)
ROOT_DIR = os.path.abspath(os.path.dirname(__name__))
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/


SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
# SECURITY WARNING: don't run with debug turned on in production!
# Set to `True` for requests from `http://localhost:3000`
# When set to `False`, run `python manage.py runserver --insecure` locally to serve static files
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'knox',
    'profiles.apps.ProfilesConfig',
    'authentication.apps.AuthenticationConfig',
    'frontend',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'rentalapp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'frontend.context_processors.static',
            ],
        },
    },
]

WSGI_APPLICATION = 'rentalapp.wsgi.application'


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

# URL to use when referring to static files located in STATIC_ROOT
STATIC_URL = '/static/'
# Absolute filesystem path to the directory that will hold user-uploaded files
MEDIA_ROOT = os.path.join(ROOT_DIR, 'media')
# URL that handles the media served from MEDIA_ROOT
MEDIA_URL = '/media/'

REACT_APP_DIR = os.path.join(ROOT_DIR, 'frontend')
FRONTEND_BUILD_ROOT = os.path.join(REACT_APP_DIR, 'build')

# List of directories where Django will also look for static files
STATICFILES_DIRS = [
    os.path.join(ROOT_DIR, 'static'),
    os.path.join(FRONTEND_BUILD_ROOT, 'static')
]

print(f'>>> FRONTEND_BUILD_ROOT: {FRONTEND_BUILD_ROOT}')

STATIC_ASSET_MANIFEST = load_static_asset_manifest(FRONTEND_BUILD_ROOT)