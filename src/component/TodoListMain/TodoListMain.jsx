import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoListMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todoDataJSXArray = this.props.todoData.todos.filter((val, index, array)=> {
            switch (this.props.todoData.visibilityFilter) {
                case 'SHOW_ALL':
                    return true;
                case 'SHOW_ACTIVE':
                    return val.isCompleted ? false : true;
                case 'SHOW_COMPLETED':
                    return val.isCompleted ? true : false;
                default:
                    throw Error('No case');
            }
        }).map((val, index, array)=><TodoItem todoItemObj={val} key={index.toString()+'hash'}/>);
        return (<main className="container flex-container">
            {todoDataJSXArray}
        </main>);
    }
}

TodoListMain.propTypes = {
    todoData: React.PropTypes.object.isRequired
};

export default TodoListMain;