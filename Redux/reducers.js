/**
 * Created by HeskeyBaozi on 2016/7/10 0010.
 */
var Action = require('./action.js');
var Redux = require('redux');


function todos(state, action) {
    if (typeof state === 'undefined') {
        state = [];
    }
    var result = [].concat(state);
    switch (action.type) {
        case Action.ADD_TODO:
            result.push({
                text: action.text,
                completed: false
            });
            return result;
        case Action.COMPLETE_TODO:
            result[action.index].completed = true;
            return result;
        default:
            return state;
    }
}

function visibilityFilter(state, action) {
    if (typeof state === 'undefined') {
        state = Action.VisibilityFilters.SHOW_ALL;
    }
    switch (action.type) {
        case Action.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

var todoApp = Redux.combineReducers({
    visibilityFilter: visibilityFilter,
    todos: todos
});

module.exports = todoApp;