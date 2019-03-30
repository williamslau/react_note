import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import store from '../store';
import actions from '../store/actions/counter'
class Counter extends Component {
    constructor() {
        super();
        this.state = {number: store.getState().c.number}
    }
    handleIncrement = () => {
        store.dispatch(actions.add(2));
    }
    handleDecrement = () => {
        this.setState({ number: this.state.number - 1 });
    }
    componentDidMount(){
        this.unsub=store.subscribe(()=>{
            this.setState({number:store.getState().c.number});
        });
    }
    componentWillUpmount(){
        this.unsub();
    }
    render() {
        return (<div>
            计数器：{this.state.number}
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>
        </div>)
    }
}
export default Counter