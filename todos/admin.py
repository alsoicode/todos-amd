from django.contrib import admin

from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ['__unicode__', 'done']


admin.site.register(Todo, TodoAdmin)
