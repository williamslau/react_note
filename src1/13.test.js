import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
class LifeCyele extends Component {
    static defaultProps={
        name:'william'
    }
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            name:props.name
        }
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log('render');
        return (
            <div>
                {this.props.name}
                {this.state.name}
            </div>
        )
    }
}
render(<LifeCyele></LifeCyele>,window.root);
