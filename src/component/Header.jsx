import React from 'react';
import todoItem from '../todoItem.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = new todoItem('GGB', 'des', false, 2);
    }

    render() {
        return (<div className="bg-success">
            <header className="container">
                <h1 className="text-primary text-center">ToDos</h1>
                <form className="row" onSubmit={this.props.handler.addTask.bind(this)}>
                    <div className="col-sm-8 form-group">
                        <label className="sr-only" htmlFor="addTaskInput">
                            Add Task
                        </label>
                        <input type="text"
                               id="addTaskInput"
                               className="form-control"
                               placeholder="What do you want to do?"
                               value={this.state.title}/>
                    </div>
                    <div className="col-sm-2 form-group">
                        <select className="form-control" value={this.state.importance}>
                            <option value={3}>Very Important</option>
                            <option value={2}>Important</option>
                            <option value={1}>Normal</option>
                            <option value={0}>Unimportant</option>
                        </select>
                    </div>
                    <div className="col-sm-2 form-group">
                        <input type="submit"
                               value="Add"
                               className="btn btn-block btn-md btn-default"/>
                    </div>
                </form>
            </header>
        </div>);
    }
}

export default Header;