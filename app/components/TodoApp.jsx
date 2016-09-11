import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({

    getInitialState() {
        return {
            todos: [
                {id: 1, text: 'walk the dog'},
                {id: 2, text: 'clearn yard'},
                {id: 3, text: 'nothing'},
                {id: 4, text: 'bleehhhh'},
            ],
            showCompleted: false,
            searchText: ''
        };
    },

    handleAddTodo(text){
        alert('new todo: ' + text);
    },

    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        });

    },

    render() {
        var {todos} = this.state;
        return (
            <div>
                <div className="row">

                    <div className="columns medium-6 large-4 small-centered">
                        <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList todos={todos}/>
                    </div>
                    <AddTodo    onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

export default TodoApp;