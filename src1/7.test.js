import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Clock extends Component{
    constructor(props){
        super();
        this.state={date:new Date().toLocaleString(),name:props.name}
        this.handleCloick=this.handleClick.bind(this);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({date:new Date().toLocaleString()});
        },1000);
    }
    handleClick(){
        ReactDOM.unmountComponentAtNode(window.root);
    }
    render(){
        return (
            <div onClick={this.handleClick}>
                <span>当前时间：</span>
                {this.state.date}
                {this.state.name}
            </div>
        )
    }
}
render(
    <React.Fragment>
        <Clock name="aaa"></Clock>
        <Clock name="bbb"></Clock>
    </React.Fragment>,
    window.root
)