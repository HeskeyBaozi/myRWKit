/**
 *  action types
 */
export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

/**
 * @description filter constant
 * @type {{SHOW_ALL: string, SHOW_ACTIVE: string, SHOW_COMPLETED: string}}
 */
export const filterTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

/**
 * action factory
 */
export const actionCreator = {
    addTodo(todoItemObj) {
        return {
            type: actionTypes.ADD_TODO,
            todoItemObj: todoItemObj
        }
    },
    completeTodo(index) {
        return {
            type: actionTypes.COMPLETE_TODO,
            index: index
        }
    },
    setVisibilityFilter(newFilter){
        return {
            type: actionTypes.SET_VISIBILITY_FILTER,
            newFilter: newFilter
        }
    }
};