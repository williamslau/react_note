import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = { content: 'hello', a: 1, b: 2 }
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        let name = e.target.name;
        this.setState({ [name]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    required={true}
                    value={this.state.a}
                    onChange={this.handleChange}
                    name="a"
                />
                <input type="submit" />
            </form>
        )
    }
}
render(<App></App>, window.root);