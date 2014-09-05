import json

from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=100)
    done = models.BooleanField(default=False)

    def __unicode__(self):
        return self.title

    @classmethod
    def to_JSON(cls):
        data = []
        objects = cls.objects.all()
        for obj in objects:
            data.append({'id': obj.id, 'title': obj.title, 'done': obj.done})

        return json.dumps(data)
