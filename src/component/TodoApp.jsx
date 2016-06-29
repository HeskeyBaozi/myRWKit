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

/*
* ES6明确规定，Class内部只有静态方法，没有静态属性。
* 所以以下两种写法都无效
* class Foo {
*     // 写法一
*     prop: 2
*     // 写法二
*     static prop: 2
*}
*
* Foo.prop // undefined
* ES7有一个静态属性的提案，目前Babel转码器支持
* */
TodoApp.defaultProps = {
    title: 'World!'
};

TodoApp.propTypes = {};

export default TodoApp;