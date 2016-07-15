import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.completeTask();
    }

    render() {
        return (<div className="bg-info">
            <h3>{this.props.todoItemObj.title}</h3>
            <h4 className={this.props.todoItemObj.isCompleted ? 'text-success' : 'text-danger'}><strong>
                {this.props.todoItemObj.isCompleted ? 'Completed' : 'Active'}</strong>
            </h4>
            <p>des: {this.props.todoItemObj.description}</p>
            <p>importance: {this.props.todoItemObj.importance}</p>
            <p className="btn btn-primary" onClick={this.handleClick.bind(this)}>Completed!!!</p>
        </div>);
    }
}

TodoItem.propTypes = {
    todoItemObj: React.PropTypes.object.isRequired
};

export default TodoItem;