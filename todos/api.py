from tastypie.authorization import Authorization
from tastypie.resources import ModelResource

from .models import Todo


class TodoResource(ModelResource):
    class Meta:
        allowed_methods = ['get', 'post', 'delete', 'put']
        always_return_data = True
        authorization = Authorization()
        queryset = Todo.objects.all()
        resource_name = 'todo'
