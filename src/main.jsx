import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main.jsx';
import todoItem from './todoItem.jsx';

var todoJson = [
    new todoItem('你好1', '这个是描述1', false, 0),
    new todoItem('你好2', '这个是描述2', true, 1),
    new todoItem('你好31', '这个是描述3', false, 0)
];

ReactDOM.render(<Main todoData={todoJson}/>, document.querySelector('#app'));