import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({

    componentDidUpdate(prevProps, prevState, prevContext) {
        TodoAPI.setTodos(this.state.todos);
    },

    getInitialState() {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };
    },

    handleAddTodo(text){
        this.setState({
            todos: [
                ...this.state.todos,
                { id:uuid(), text:text, completed:false}
            ]
        });

    },

    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });

    },

    handleToggle(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos:updatedTodos
        });

    },
    
    render() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <div className="row">

                    <div className="columns medium-6 large-4 small-centered">
                        <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList todos={filteredTodos}
                                    onToggle={this.handleToggle}/>
                    </div>
                    <AddTodo onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        );
    }
});

export default TodoApp;