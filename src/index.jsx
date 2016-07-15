import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App.jsx';
import {filterTypes, actionCreator} from './redux/actions.jsx';
import todoApp from './redux/reducers.jsx';
import {todoItem} from './containers/todoItem.jsx';

let todoJson1 = {
    filter: filterTypes.SHOW_ALL,
    todos: [
        new todoItem('你好1', '这个是描述1', false, 0),
        new todoItem('你好2', '这个是描述2', true, 1),
        new todoItem('你好31', '这个是描述3', false, 0)
    ]
};

let store = createStore(todoApp);
setTimeout(() => {
    fetch('../static/todo.json')
        .then((response) => {
            if (response.status !== 200) {
                console.log('获取有点小错误, 状态码:', response.status);
                throw Error(response.status);
            }
            response.json().then((data) => {
                console.log('获取到的JSON数据:', data);
                return data;
            }).then((data) => {
                for (let obj of data.todos) {
                    store.dispatch(actionCreator.addTodo(obj));
                }
            });
        })
        .catch((error) => console.log('ERROR!!!!!', error));
}, 1000);


ReactDOM.render(
    <Provider store={store}>
        <App itselfProps={'Hello'}/>
    </Provider>,
    document.querySelector('#app'));