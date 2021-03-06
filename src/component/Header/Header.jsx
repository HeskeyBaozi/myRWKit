import React from 'react';
import {todoItem} from '../../containers/todoItem.jsx'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = new todoItem('', 'None', false, 1);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title === '') {
            alert('title不得为空');
            return;
        }
        this.props.addTask(this.state);
        this.setState({
            title: '',
            importance: 1
        })
    }

    handleChange(e) {
        e.preventDefault();
        switch (e.target.tagName) {
            case 'INPUT':
                this.setState({
                    title: e.target.value
                });
                break;
            case 'SELECT':
                this.setState({
                    importance: parseInt(e.target.value)
                });
                break;
            default:
                throw Error('can know where is the scource...');
        }
    }

    render() {
        return (<div className="bg-success">
            <div style={{
                backgroundColor: 'black',
                height: '2px'
            }}></div>
            <header className="container">
                <h1 className="text-primary text-center"
                    style={{
                        margin: '100px auto'
                    }}>ToDos</h1>
                <form className="row" onSubmit={this.handleSubmit.bind(this) }>
                    <div className="col-sm-8 form-group">
                        <label className="sr-only" htmlFor="addTaskInput">
                            Add Task
                        </label>
                        <input type="text"
                            id="addTaskInput"
                            className="form-control"
                            placeholder="What do you want to do?"
                            value={this.state.title}
                            onChange={this.handleChange.bind(this) }/>
                    </div>
                    <div className="col-sm-2 form-group">
                        <select className="form-control"
                            value={this.state.importance}
                            onChange={this.handleChange.bind(this) }>
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