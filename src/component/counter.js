import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import action from '../store/actions/counter'
class Counter extends Component {
    handleAdd = () => {
        this.props.add(1);
    }
    handleMinus = () => {
        this.props.minus(1);
    }
    render() {
        return (<div>
            {this.props.number}
            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleMinus}>-</button>
        </div>)
    }
}
let mapStateTpProps = (state) => ({ number: state.counter.number });
let mapDispatchToProps = (dispatch) => ({
    add: (v) => dispatch(action.add(v)),
    minus: (v) => dispatch(action.minus(v)),
})
export default connect(mapStateTpProps, mapDispatchToProps)(Counter);