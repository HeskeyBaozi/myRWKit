import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="flexBox">
            <h1>
                title: {this.props.todoItemObj.title} {this.props.todoItemObj.isCompleted ? '完成!!' : '未完成'}
            </h1>
            <p>des: {this.props.todoItemObj.description}</p>
            <p>importance: {this.props.todoItemObj.importance}</p>
        </div>);
    }
}

TodoItem.propTypes = {
    todoItemObj: React.PropTypes.object.isRequired
};

export default TodoItem;