import React from 'react';
import Header from './Header/Header.jsx';
import TodoListMain from './TodoListMain/TodoListMain.jsx';
import Footer from './Footer/Footer.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoDataArray: this.props.todoData
        };
    }

    render() {
        let handlers = {
            addTask: function (event) {
                event.preventDefault();
                alert('addTask!!!' + this.state.title);
            }
        };
        return (<div>
            <Header handler={handlers}/>
            <TodoListMain todoData={this.state.todoDataArray}/>
            <Footer todoData={this.state.todoDataArray}/>
        </div>);
    }
}

Main.propTypes = {
    todoData: React.PropTypes.array.isRequired
};

export default Main;