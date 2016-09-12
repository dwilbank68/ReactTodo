import React from 'react';
import moment from 'moment';


const Todo = React.createClass({
    render() {
        var {id, text, completed} = this.props;

        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        return (
            <div onClick={()=>{this.props.onToggle(id)}}
                    className={todoClassName}>
                <div>
                    <input type="checkbox" checked={completed} readOnly="true"/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{this.renderDate()}</p>
                </div>

            </div>
        );
    },
    renderDate(){
        var {completed, createdAt, completedAt}  = this.props;
        var message = 'Created ';
        var timestamp = createdAt;

        if (completed){
            message = 'Completed ';
            timestamp = completedAt;
        }

        return message + moment
                            .unix(timestamp)
                            .format('MMM Do YYYY @ h:mm a');
    }
});

export default Todo;
