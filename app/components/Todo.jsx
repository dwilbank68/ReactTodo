import React from 'react';
import moment from 'moment';


const Todo = React.createClass({
    render() {
        var {id, text, completed} = this.props;

        return (
            <div onClick={()=>{this.props.onToggle(id)}}>
                <input type="checkbox" checked={completed} readOnly="true"/>
                <p>{text}</p>
                <p>{this.renderDate()}</p>
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
                            .format('MM Do YYYY @ h:mm a');
    }
});

export default Todo;
