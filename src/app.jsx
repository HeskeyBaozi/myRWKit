import React from 'react';
import ReactDOM from 'react-dom';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Hello, My name is{this.props.title}</h1>
        </div>);
    }

}

// 默认属性外部定义
ToDoApp.defaultProps = {
    title: 'World!'
};

ToDoApp.propTypes = {
    title: React.PropTypes.string.isRequired
};

ReactDOM.render(<ToDoApp title="Baozi!"/>, document.querySelector('#app'));
