import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

const TodoApp = React.createClass({

    getInitialState() {
        return {
            todos: [
                {id: 1, text: 'walk the dog'},
                {id: 2, text: 'clearn yard'},
                {id: 3, text: 'nothing'},
                {id: 4, text: 'bleehhhh'},
            ]
        };
    },

    handleAddTodo(text){
        alert('new todo: ' + text);
    },

    render() {
        var {todos} = this.state;
        return (
            <div>
                <div className="row">

                    <div className="columns medium-6 large-4 small-centered">
                        <TodoList todos={todos}/>
                    </div>
                    <AddTodo    onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

export default TodoApp;