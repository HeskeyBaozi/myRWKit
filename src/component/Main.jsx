import React from 'react';
import Header from './Header/Header.jsx';
import TodoListMain from './TodoListMain/TodoListMain.jsx';
import Footer from './Footer/Footer.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityFilter: this.props.todoData.visibilityFilter,
            todos: this.props.todoData.todos
        };
        this.handlers = {
            addTask: (newTodoItemObj)=> {
                this.setState({
                    todos: [...this.state.todos, newTodoItemObj]
                });
            },
            changeFilter: (newFilter)=> {
                this.setState({
                    visibilityFilter: newFilter
                });
            }
        };
    }

    render() {
        return (<div>
            <Header handler={this.handlers}/>
            <TodoListMain todoData={this.state}/>
            <Footer visibilityFilter={this.state.visibilityFilter} handler={this.handlers}/>
        </div>);
    }
}

Main.propTypes = {
    todoData: React.PropTypes.object.isRequired
};

export default Main;