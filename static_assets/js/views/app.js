define(
['backbone', 'underscore', 'jquery', 'collections/todos', 'views/todo'],
function(Backbone, _, $, TodosCollection, TodoView) {

    TodoList = new TodosCollection;

    var AppView = Backbone.View.extend({
        el: $('#todoapp'),

        statsTemplate: _.template($('#stats-template').html()),

        events: {
            'keypress #new-todo': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },

        initialize: function() {
            this.input = this.$('#new-todo');
            this.allCheckbox = this.$('#toggle-all');

            this.listenTo(TodoList, 'add', this.addOne);
            this.listenTo(TodoList, 'reset', this.addAll);
            this.listenTo(TodoList, 'all', this.render);

            this.footer = this.$('footer');
            this.main = $('#main');

            TodoList.reset(initialTodos);
        },

        render: function() {
            var done = TodoList.done().length;
            var remaining = TodoList.remaining().length;

            if (TodoList.length) {
                this.main.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({
                    done: done,
                    remaining: remaining
                }));
            }
            else {
                this.main.hide();
                this.footer.hide();
            }

            this.allCheckbox.checked = !remaining;
        },

        addOne: function(todo) {
            var view = new TodoView({model: todo});
            this.$('#todo-list').append(view.render().el);
        },

        addAll: function() {
            TodoList.each(this.addOne, this);
        },

        createOnEnter: function(e) {
            if (e.keyCode != 13) {
                return;
            }
            if (!this.input.val()) {
                return;
            }

            TodoList.create({title: this.input.val()});
            this.input.val('');
        },

        clearCompleted: function() {
            _.invoke(TodoList.done(), 'destroy');
        },

        toggleAllComplete: function() {
            var done = this.allCheckbox.checked;

            if (done) {
                TodoList.each(function(todo) {
                    todo.save({'done': done});
                    todo.toggle();
                });
            }
            else {
                TodoList.each(function(todo) {
                    todo.toggle();
                });
            }
        }
    });

    return AppView;
});