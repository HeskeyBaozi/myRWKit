import React from 'react';
import {filterTypes} from '../../redux/actions.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.props);
        this.props.changeFilter(e.target.id);
    }

    render() {
        return (<footer className="container">
            <ul className="list-inline text-center">
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id={filterTypes.SHOW_ALL}>All</a>
                </li>
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id={filterTypes.SHOW_ACTIVE}>Active</a>
                </li>
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id={filterTypes.SHOW_COMPLETED}>Completed</a>
                </li>
            </ul>
        </footer>);
    }
}

export default Footer;