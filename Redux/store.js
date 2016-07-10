var Redux = require('redux');
var todoApp = require('./reducers.js');
var Action = require('./action.js');

var store = Redux.createStore(todoApp,
    (function () {
        return {
            visibilityFilter: Action.VisibilityFilters.SHOW_ALL,
            todos: []
        }
    })());

var unsubscribe = store.subscribe(function () {
    console.log(this.getState());
}.bind(store));


