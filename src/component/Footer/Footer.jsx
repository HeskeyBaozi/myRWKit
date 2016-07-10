import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handler.changeFilter(e.target.id);
    }

    render() {
        return (<footer className="container">
            <ul className="list-inline text-center">
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id="SHOW_ALL">All</a>
                </li>
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id="SHOW_ACTIVE">Active</a>
                </li>
                <li >
                    <a href="#"
                       onClick={this.handleClick.bind(this)}
                       id="SHOW_COMPLETED">Completed</a>
                </li>
            </ul>

        </footer>);
    }
}

export default Footer;