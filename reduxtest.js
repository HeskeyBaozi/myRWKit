/**
 * Created by HeskeyBaozi on 2016/7/2 0002.
 */
var redux = require('redux');

var store = redux.createStore(function (state, action) {
    if (action.type === 'change') {
        return {
            bool: !state.bool
        };
    }
    return state;
}, {
    bool: true
});

store.subscribe(function () {
    console.log(store.getState());
});

store.dispatch({
    type: 'change'
});