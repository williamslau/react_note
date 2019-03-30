import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class article extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
    render() {
        return (<div>
            article{this.props.match.params.id}
        </div>)
    }
}
export default article