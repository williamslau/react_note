import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

let { Consumer, Provider } = React.createContext();
class Title extends Component {
    render() {
        return <Consumer>
            {({ s, h }) => {
                return <div style={s} onClick={() => {
                    h('red')
                }}>hello word</div>
            }}
        </Consumer>
    };
}
class Head extends Component {
    render() {
        return <div>
            <Title></Title>
        </div>
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            color: 'yellow'
        }
    }
    handleClick = (newColor) => {
        this.setState({ color: newColor });
    }
    render() {
        return <Provider value={{ s: this.state, h: this.handleClick }}>
            <Head></Head>
        </Provider>
    }
}
render(<App></App>, window.root);