import React from 'react';
import {filterTypes} from '../../redux/actions.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        // this.props.changeFilter(e.target.id);
        // fixme: BUG! 使用过滤器后, 完成任务无法准确对应
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