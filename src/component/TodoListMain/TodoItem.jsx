import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="flexBox">
            <h3 className={this.props.todoItemObj.isCompleted?'text-success':'text-danger'}>
                <strong>
                    {this.props.todoItemObj.title} {this.props.todoItemObj.isCompleted ? 'Completed' : 'Active'}
                </strong>
            </h3>
            <p>des: {this.props.todoItemObj.description}</p>
            <p>importance: {this.props.todoItemObj.importance}</p>
        </div>);
    }
}

class A extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
        <h1>Hello, World!!</h1>
        </div>);
    }
}

TodoItem.propTypes = {
    todoItemObj: React.PropTypes.object.isRequired
};

export default TodoItem;