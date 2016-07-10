/**
 * Created by HeskeyBaozi on 2016/7/10 0010.
 */

var config = {
    ADD_TODO: 'ADD_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    VisibilityFilters: {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
    },
    addTodo: function (text) {
        return {type: this.ADD_TODO, text: text};
    },
    completeTodo: function (index) {
        return {type: this.COMPLETE_TODO, index: index};
    },
    setVisibilityFilter: function (filter) {
        return {type: this.SET_VISIBILITY_FILTER, filter: filter};
    }
};
module.exports = config;