import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import action from '../store/actions/counter'

class Counter extends Component {
    constructor() {
        super();
    }
    add = () => {
        this.props.add(1);
    }
    minus = () => {
        this.props.minus(1);
    }
    thunk = () => {
        this.props.thunk(2);
    }
    promise = () => {
        this.props.promise(1);
    }
    render() {
        return (<div>
            {this.props.number}
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <button onClick={this.thunk}>+</button>
            <button onClick={this.promise}>promise</button>
        </div>)
    }
}
export default connect(state => ({
    number: state.counter.number
}), action)(Counter)