import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main.jsx';

/**
 * @description 一个代表一个事件的类
 * @param {string} title - 要做的事情标题
 * @param {string} description - 事情简要描述
 * @param {boolean} isCompleted - 事情是否完成
 * @param {number} importance - 事情的重要性
 */
class todoItem {
    constructor(title, description, isCompleted, importance) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.importance = importance;
    }
}

let todoJson = {
    visibilityFilter: 'SHOW_ACTIVE',
    todos: [
        new todoItem('你好1', '这个是描述1', false, 0),
        new todoItem('你好2', '这个是描述2', true, 1),
        new todoItem('你好31', '这个是描述3', false, 0)
    ]
};

ReactDOM.render(<Main todoData={todoJson}/>, document.querySelector('#app'));