import React from 'react';
import Header from '../component/Header/Header.jsx';
import TodoListMain from '../component/TodoListMain/TodoListMain.jsx';
import Footer from '../component/Footer/Footer.jsx';
import {connect} from 'react-redux';
import {filterTypes, actionCreator} from '../redux/actions.jsx';
import {todoItemProtoTypesObj} from './todoItem.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header addTask={this.props.addTask}/>
            <TodoListMain completeFactory={this.props.completeFactory}
                          todos={this.props.todos}/>
            <Footer changeFilter={this.props.changeFilter}
                    filter={this.props.filter}/>
        </div>);
    }
}


App.propTypes = {
    todos: React.PropTypes.arrayOf(
        React.PropTypes.shape(todoItemProtoTypesObj)
    ),
    filter: React.PropTypes.oneOf([
        filterTypes.SHOW_ACTIVE,
        filterTypes.SHOW_ALL,
        filterTypes.SHOW_COMPLETED
    ]).isRequired
};


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

const mapStateToProps = (state, ownProps) => ({
    todos: selectTodos(state.todos, state.filter),
    filter: state.filter,
});

const mapDispatchToProps = (dispatch, ownPropsFromDispatch) => ({
    addTask: (newTodoItemObj) => dispatch(actionCreator.addTodo(newTodoItemObj)),
    changeFilter: (newFilter) => dispatch(actionCreator.setVisibilityFilter(newFilter)),
    completeFactory: (newindex) => dispatch(actionCreator.completeTodo(newindex)),
});

const mapDispatchToPropsObj = {
    addTask: actionCreator.addTodo,
    changeFilter: actionCreator.setVisibilityFilter,
    completeFactory: actionCreator.completeTodo
};

const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, ownProps, stateProps, dispatchProps);

const options = {
    pure: true,
    withRef: true
};

export default connect(mapStateToProps, mapDispatchToPropsObj)(App);