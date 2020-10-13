"""---------------------------Zona para imports and from.----------------------"""
from pathlib import Path
import os


"""---------------------------Zona para configuraciones base del proyecto.----------------------"""

# Directorio base del proyecto.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '@kehe!87ui+hh2k(bp_prh^r65$8406@+as&_*n27n-_-o!&v8'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Host del proyecto
ALLOWED_HOSTS = [
    '0.0.0.0',
    '127.0.0.1',
    '.localhost']


STATICFILES_FINDERS = [
    "django_tenants.staticfiles.finders.TenantFileSystemFinder",  # Must be first
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
    # "compressor.finders.CompressorFinder",
]

MULTITENANT_STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "/static/%s/"),
]


STATICFILES_STORAGE = "django_tenants.staticfiles.storage.TenantStaticFilesStorage"
# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
# Directorio para archivos estaticos

# Configurate at upload files
STATIC_ROOT = 'static'

# archivos multimedia
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# paquete CORS, para el servidor.
CORS_ORIGIN_ALLOW_ALL = True

# Especifica que la aplicacion es tipo web service
WSGI_APPLICATION = 'api_foodsaas.wsgi.application'

# directorio raiz de enrutamiento
ROOT_URLCONF = 'api_foodsaas.urls'

# --- React views template.
REACT_APP_DIR = os.path.join(BASE_DIR, 'frontend') 
STATICFILES_DIRS = [
    os.path.join(REACT_APP_DIR, 'build', 'static'),
]


"""---------------------------Zona para configuraciones de las apps del proyecto.----------------------"""

# Aplicaciones nativas de django.
DJANGO_APPS = (
    'django.contrib.contenttypes',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

# Aplicaciones instaladas en el pipenv -> pipfile.
THIRD_PARTY_APPS = (
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
)

# Aplicaciones compartidas por los tenants
SHARED_APPS = (
    # aplicaciones locales.
    'django_tenants',  # aplicacion que administra los tenants.
    'tenant',
    'frontend',
    'users',
    'accesspoint',
) + DJANGO_APPS + THIRD_PARTY_APPS

# Especifica que aplicaciones tienen los tenenat
TENANT_APPS = DJANGO_APPS + THIRD_PARTY_APPS

# Configura el global de las aplicaciones instaladas.
INSTALLED_APPS = list(SHARED_APPS) + \
    [app for app in TENANT_APPS if app not in SHARED_APPS]

"""---------------------------Zona para configuraciones los middlewares del proyecto.----------------------"""

MIDDLEWARE = [
    'django_tenants.middleware.main.TenantMainMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

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
            ],
        },
    },
]


"""---------------------------Zona para configuraciones del DRF.----------------------"""

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
    #    'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',
    #     'rest_framework.permissions.IsAuthenticated',
     ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',  # <-- And here
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        #'rest_framework.parsers.FormParser',
        #'rest_framework.parsers.MultiPartParser'
    ]
}

REST_AUTH_SERIALIZERS = {
    "USER_DETAILS_SERIALIZER": "CustomUser.serializers.UserSerializer",
}
REST_AUTH_REGISTER_SERIALIZERS = {
    "REGISTER_SERIALIZER": "CustomUser.serializers.RegisterUserSerializer",
}

"""---------------------------Zona para configuraciones las Db del proyecto.----------------------"""

# Base de datos.
DATABASES = {
    'default': {
        'ENGINE': 'django_tenants.postgresql_backend',
        'NAME': 'dfe21j6pq9qump',
        'USER': 'sglraooeiociea',
        'PASSWORD': '2974617d1adde174bd7d8f2da4dbfd7cb3e345b03cd2d1cb4e394a08dcb53b54',
        'HOST': 'ec2-54-243-67-199.compute-1.amazonaws.com',
        'PORT': '5432',
    }
}

# databases router.
DATABASE_ROUTERS = (
    'django_tenants.routers.TenantSyncRouter',
)

"""---------------------------Zona para configuraciones del modelo Auth del proyecto.----------------------"""

# Configurate costumuser by Auth
AUTH_USER_MODEL = 'users.CustomUser'

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

"""---------------------------Zona para configuraciones los middlewares del proyecto.----------------------"""


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

"""---------------------------Zona para configuraciones del modelo tenant en el proyecto.----------------------"""

TENANT_MODEL = "tenant.Client"  # app.Model
TENANT_DOMAIN_MODEL = "tenant.Domain"  # app.Model
