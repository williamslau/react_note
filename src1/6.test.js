import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

function Clock(props){
    return (
        <React.Fragment>
            <span>当前时间：</span>
            {props.data.toLocaleString()}
        </React.Fragment>
    )
}
render(<Clock data={new Date()}></Clock>,window.root);
setInterval(function(){
    render(<Clock data={new Date()}></Clock>,window.root);
},1000);