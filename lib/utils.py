import os

from django.conf import settings


def map_path(directory_name):
    return os.path.join(os.path.dirname(__file__),
        '../' + directory_name).replace('\\', '/')