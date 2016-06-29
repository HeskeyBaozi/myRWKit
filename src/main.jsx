import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './component/TodoApp.jsx';

class todoItem {
    constructor(title, description, isCompleted, importance) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.importance = importance;
    }
}

ReactDOM.render(<TodoApp title="Baozi!"/>, document.querySelector('#app'));