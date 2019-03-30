import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter'
class Counter extends Component {
    constructor() {
        super();
    }
    add = () => {
        this.props.add(2);
    }
    minus = () => {
        this.props.minus(1);
    }
    render() {
        return (<div>
            计数器：{this.props.number}
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </div>)
    }
}
export default connect(state => {
    return { number: state.counter.number }
}, actions)(Counter);