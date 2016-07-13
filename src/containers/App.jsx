import React from 'react';
import Header from '../component/Header/Header.jsx';
import TodoListMain from '../component/TodoListMain/TodoListMain.jsx';
import Footer from '../component/Footer/Footer.jsx';
import {connect} from 'react-redux';
import {filterTypes, actionFactory} from '../redux/actions.jsx';
import {todoItemProtoTypesObj} from './todoItem.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header addTask={this.props.addTask}/>
            <TodoListMain todos={this.props.todos} filter={this.props.filter}/>
            <Footer changeFilter={this.props.changeFilter} filter={this.props.filter} />
        </div>);
    }
}


Main.propTypes = {
    todos: React.PropTypes.arrayOf(
        React.PropTypes.shape(todoItemProtoTypesObj)
    ),
    filter: React.PropTypes.oneOf([
        filterTypes.SHOW_ACTIVE,
        filterTypes.SHOW_ALL,
        filterTypes.SHOW_COMPLETED
    ]).isRequired
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: (newTodoItemObj) => dispatch(actionFactory.addTodo(newTodoItemObj)),
        changeFilter: (newFilter) => dispatch(actionFactory.setVisibilityFilter(newFilter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);