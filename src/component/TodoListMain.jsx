import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoListMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoDataArray: this.props.todoData
        };
    }

    render() {
        let todoDataJSXArray = this.state.todoDataArray.map(function (val, index, array) {
            return <TodoItem todoItemObj={val}/>
        });
        return (<main className="container flex-container">
            {todoDataJSXArray}
        </main>);
    }
}

TodoListMain.propTypes = {
    todoData: React.PropTypes.array.isRequired
};

export default TodoListMain;