import React from 'react';
import Header from './Header.jsx';
import TodoListMain from './TodoListMain.jsx';
import Footer from './Footer.jsx';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header/>
            <TodoListMain/>
            <Footer/>
        </div>);
    }

}

// 默认属性外部定义
TodoApp.defaultProps = {
    title: 'World!'
};

TodoApp.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default TodoApp;