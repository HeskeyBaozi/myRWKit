import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App.jsx';
import {filterTypes} from './redux/actions.jsx';
import todoApp from './redux/reducers.jsx';


let store = createStore(todoApp);

import {todoItem} from './containers/todoItem.jsx';
let todoJson = {
    filter: filterTypes.SHOW_ALL,
    todos: [
        new todoItem('你好1', '这个是描述1', false, 0),
        new todoItem('你好2', '这个是描述2', true, 1),
        new todoItem('你好31', '这个是描述3', false, 0)
    ]
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app'));