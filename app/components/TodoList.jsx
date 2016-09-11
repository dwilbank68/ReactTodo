import React from 'react';
import Todo from 'Todo';


const TodoList = React.createClass({
    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    },

    renderTodos(){
        var {todos} = this.props;
        return todos.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo}>
                    </Todo>
                )
            }
        )
    }

});

export default TodoList;
