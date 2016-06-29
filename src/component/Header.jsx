import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="bg-success">
            <header className="container">
                <h1 className="text-primary text-center">ToDos</h1>
                <form className="row">
                    <div className="col-sm-8 form-group">
                        <label className="sr-only" htmlFor="addTaskInput">
                            Add Task
                        </label>
                        <input type="text"
                               id="addTaskInput"
                               className="form-control"
                               placeholder="What do you want to do?"/>
                    </div>
                    <div className="col-sm-2 form-group">
                        <select className="form-control">
                            <option value="very-important">Very Important</option>
                            <option value="important">Important</option>
                            <option value="normal" selected>Normal</option>
                            <option value="unimportant">Unimportant</option>
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