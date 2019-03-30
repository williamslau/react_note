import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from '../redux';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
let initState = { number: 0 };
function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + action.count }
        case DECREMENT:
            return { number: state.number - action.count }
        default:
            return state;
    }
};
let store = createStore(reducer);
let actions = {
    add(count) {
        return { type: INCREMENT, count: count };
    },
    minus(count) {
        return { type: DECREMENT, count: count };

    }
}
export default class Counter extends Component {
    constructor() {
        super();
        this.state = { number: store.getState().number };
    }
    handleIncrement = () => {
        store.dispatch(actions.add(2));
    }
    handleDecrement = () => {
        store.dispatch(actions.minus(1));
    }
    componentWillMount() {
        this.unsub = store.subscribe(() => {
            this.setState({ number: store.getState().number });
        });
        console.log(this.unsub);
    }
    componentWillUnmount() {
        this.unsub();
    }
    render() {
        return (<div>
            <h1>计数器：{this.state.number}</h1>
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>
        </div>)
    }
}