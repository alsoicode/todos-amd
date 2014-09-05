define(['backbone'], function(Backbone) {

    var TodoModel = Backbone.Model.extend({
        defaults: function() {
            return {
                title: 'Empty Todo...',
                order: TodoList.nextOrder(),
                done: false
            };
        },

        toggle: function() {
            this.save({
                done: !this.get('done')
            });
        },

        url: function() {
            var id = this.id || '';
            if (id !== '') {
                id += '/';
            }
            return '/api/v1/todo/' + id;
        }
    });

    return TodoModel;
});