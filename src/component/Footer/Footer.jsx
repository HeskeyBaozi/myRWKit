import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<footer className="container">
            <div className="col-sm-1">
                <label htmlFor="selectAll">Select All</label>
                <input type="checkbox" id="selectAll"/>
            </div>
            <div className="col-sm-11">
                <p className="text-center">
                    Hello,
                </p>
            </div>
        </footer>);
    }
}

export default Footer;