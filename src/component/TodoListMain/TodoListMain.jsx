import React from 'react';
import TodoItem from './TodoItem.jsx';
import {filterTypes} from '../../redux/actions.jsx';

class TodoListMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todosArray = this.props.todos.map((val, index, array) =>
            (<TodoItem todoItemObj={val}
                       key={val.title}
                       index={index}
                       completeTask={this.props.completeFactory}/>));
        return (<main className="container">
            {todosArray}
        </main>);
    }
}

TodoListMain.propTypes = {};

export default TodoListMain;