import React, {
    PropTypes,
} from 'react';

const Todo = React.createClass({
    render() {
        return (
            <div>{this.props.id}. {this.props.text}</div>
        );
    }
});

export default Todo;
 