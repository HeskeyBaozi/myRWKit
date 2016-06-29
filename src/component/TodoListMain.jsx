import React from 'react';

class TodoListMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<main className="container">
            <div className="row">
                <div className="col-sm-3">
                    <input type="checkbox"
                           className="checkbox form-control"/>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <h2>Do Something..</h2>
                    </div>
                    <div className="row">
                        <p>description..............</p>
                    </div>
                </div>
            </div>
        </main>);
    }
}

export default TodoListMain;