import {combineReducers} from 'redux';
import {actionTypes, filterTypes} from './actions.jsx';

function todos(todosArrayState, action) {
    if (typeof todosArrayState === 'undefined') {
        todosArrayState = [];
    }
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...todosArrayState, action.todoItemObj];
        case actionTypes.COMPLETE_TODO:
            return [
                ...todosArrayState.slice(0, action.index),
                Object.assign({}, todosArrayState[action.index], { isCompleted: true }),
                ...todosArrayState.slice(action.index + 1)
            ];
        default:
            return todosArrayState;
    }
}

function visibilityFilter(filterState, action) {
    if (typeof filterState === 'undefined') {
        filterState = filterTypes.SHOW_ALL;
    }
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.newFilter;
        default:
            return filterState;
    }
}


export default combineReducers({
    filter: visibilityFilter,
    todos: todos
});