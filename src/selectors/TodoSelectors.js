import {filterTypes} from '../redux/actions.jsx';
import {createSelector} from 'reselect';

const selectTodos = (todosArray, filter) => {
    switch (filter) {
        case filterTypes.SHOW_ALL:
            return todosArray;
        case filterTypes.SHOW_ACTIVE:
            return todosArray.filter((val) => !val.isCompleted);
        case filterTypes.SHOW_COMPLETED:
            return todosArray.filter((val) => val.isCompleted);
    }
};

const todosSelector = (state) => state.todos;
const filterSelector = (state) => state.filter;


/**
 * 如果state tree的改变会引起input-selector值的变化,
 * 那么selector会调用转换函数, 传入input-selecotrs作为参数,
 * 并返回结果.
 */
export const mapStateToProps = createSelector([todosSelector, filterSelector],
    (todosArray, filter) => {
        console.log('转换函数被调用, todosArray:', todosArray, '  filter:', filter);
        return {
            todos: selectTodos(todosArray, filter),
            filter
        };
    });