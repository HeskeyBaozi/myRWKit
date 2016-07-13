import React from 'react';
import TodoItem from './TodoItem.jsx';
import {filterTypes} from '../../redux/actions.jsx';

class TodoListMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todoDataJSXArray = this.props.todos.filter((val, index, array) => {
            switch (this.props.filter) {
                case filterTypes.SHOW_ALL:
                    return true;
                case filterTypes.SHOW_ACTIVE:
                    return val.isCompleted ? false : true;
                case filterTypes.SHOW_COMPLETED:
                    return val.isCompleted ? true : false;
                default:
                    throw Error('No case');
            }
        }).map((val, index, array) => <TodoItem todoItemObj={val} key={index.toString() + 'hash'}/>);
        return (<main className="container flex-container">
            {todoDataJSXArray}
        </main>);
    }
}

TodoListMain.propTypes = {};

export default TodoListMain;