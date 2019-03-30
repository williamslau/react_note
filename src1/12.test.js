import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends Component {
    constructor(){
        super();
        this.text=React.createRef();
    }
    componentDidMount(){
        this.text.current.focus()
    }
    render(){
        return (
            <div>
                <input type="text" ref={this.text}/>
            </div>
        )
    }
}
render(<App></App>,window.root);