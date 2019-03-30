import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Counter extends Component {
    state = { count: 1 }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        //this.setState(prevState => ({ count: prevState.count + 1 }));
    }
    render() {
        return (
            <div>
                <span>计算器：</span>
                {this.state.count}
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
render(<Counter></Counter>, window.root);