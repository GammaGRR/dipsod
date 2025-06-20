"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 5.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.2/ref/settings/
"""

from pathlib import Path
from datetime import timedelta
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-cutvitm!m1o8meht=ahdmu@)9uu_rt+clar70q^9h$+zk5r=po'

ALLOWED_HOSTS = ['dipsod.ru', 'www.dipsod.ru', '194.113.233.25']


# Application definition

INSTALLED_APPS = [
    'applications',
    'staff.apps.StaffConfig',
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'users',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'rest_framework_simplejwt',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CSRF_TRUSTED_ORIGINS = [
    "https://dipsod.ru",
    "https://www.dipsod.ru",
]

JAZZMIN_SETTINGS = {
    "site_title": "СОДЕЙСТВИЕ",
    "site_header": "СОДЕЙСТВИЕ",
    "site_brand": "ООО СОДЕЙСТВИЕ",
    "site_logo": "LogoSodeystvie.svg",
    "copyright": 'ООО "СОДЕЙСТВИЕ"',
    "welcome_sign": "Добро пожаловать в админ-панель ООО 'СОДЕЙСТВИЕ'!",
    "topmenu_links": [
        {"name": "Сайт", "url": "http://localhost:3000", "new_window": True},
    ],
    "icons": {
        "auth.User": "fas fa-users",
        "auth.Group": "fa-solid fa-shield",
    },
    "show_sidebar": True,
    "navigation_expanded": True,
    "custom_css": "css/jazz.css",
    "user_avatar": 'avatar',
    "usermenu_links": [
        {
            "name": "Мой профиль", 
            "url": "admin:users_customuser_change", 
            "url_parameters": {"object_id": "request.user.id"},
            "icon": "fas fa-user",
        },
    ],
}

CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'height': 300,
        'width': '100%',
    },
}

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates', os.path.join(BASE_DIR, 'frontend')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'
AUTH_USER_MODEL = 'users.CustomUser'
X_FRAME_OPTIONS = 'SAMEORIGIN'
SITE_ID = 1

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': '/root/dipsod/dipsod-backend/db.sqlite3',
    }
}

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "https://dipsod.ru",
    "https://www.dipsod.ru",
]

# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

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

ADMIN_INTERFACE_SETTINGS = {
    'show_theme_selector': True,
    'theme': {
        'dark_mode_theme': {
            'enabled': True,
            'auto_apply_system_theme': True,
        }
    }
}

DEBUG = False

ALLOWED_HOSTS = ["dipsod.ru", "www.dipsod.ru", "194.113.233.25", 'localhost', '127.0.0.1']

SECURE_SSL_REDIRECT = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

SECURE_HSTS_SECONDS = 3600  # например, 1 час
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# CSRF и cookie-защита
# CSRF_COOKIE_SECURE = True  # Только HTTPS
# CSRF_COOKIE_HTTPONLY = True            # Недоступно JS

# # SESSION_COOKIE_SECURE = True  # Сессия только по HTTPS
# SESSION_COOKIE_HTTPONLY = True         # Недоступно JS

# XSS защита
# SECURE_BROWSER_XSS_FILTER = True
# X_FRAME_OPTIONS = 'DENY'               # Запрет на iframes

# HSTS заголовок (в продакшене обязательно)
# SECURE_HSTS_SECONDS = 0                # Отключено для локалки (мешает HTTP)
# SECURE_HSTS_INCLUDE_SUBDOMAINS = False # Отключено для локалки
# SECURE_HSTS_PRELOAD = False            # Отключено для локалки

# HTTPS redirect (Только в продакшене!!!)
# SECURE_SSL_REDIRECT = False  # False для локалки

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ]
}

# REST_FRAMEWORK = {
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'rest_framework_simplejwt.authentication.JWTAuthentication',  # Если используется JWT
#     )
# }


SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),  # Время жизни токена
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}

# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
