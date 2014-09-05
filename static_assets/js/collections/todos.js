define(['backbone', 'models/todo'], function(Backbone, TodoModel) {
    var TodosCollection = Backbone.Collection.extend({

        comparator: 'order',
        model: TodoModel,
        url: '/api/v1/todo/',

        done: function() {
            return this.where({done: true});
        },

        remaining: function() {
            return this.where({done: false});
        },

        nextOrder: function() {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },

        parse: function(response) {
            return response.objects;
        }
    });

    return TodosCollection;
});