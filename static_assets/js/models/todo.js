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
        }
    });

    return TodoModel;
});