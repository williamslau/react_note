import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class LifeCyele extends Component {
    static defaultProps = {
        name: 'william'
    }
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            const: 0,
        }
    }
    handleClick=()=>{

    }
    render(){
        
    }
}