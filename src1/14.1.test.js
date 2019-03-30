import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            const: 0
        }
    }
    handleClick = () => {
        this.setState({const:this.state.const+1});
    }
    render(){
        return (
            <div>
                计数器：
                <span>{this.state.const}</span>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    };
}
render(<App></App>,window.root);