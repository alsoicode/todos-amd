define(['backbone', 'models/todo', 'backboneLocalStorage'], function(Backbone, TodoModel) {
    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel,

        localStorage: new Backbone.LocalStorage('todos-backbone-amd'),

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

        comparator: 'order'
    });

    return TodosCollection;
});