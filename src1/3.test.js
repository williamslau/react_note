import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

let name = 'williamlau';
let age = 9;
let ele = (
    <React.Fragment>
        <label htmlFor="a">输入焦点</label>
        <input type="text" id="a"/>
        <div className="aaa">{name}<br/>{age}</div>
        <div>{
            function(){
                /*注释*/
                return 1000
            }()
        }</div>
        {1+2}<br/>
        {1===1?2:3}<br/>
        <div style={{background:'red'}}>111</div>
        <div dangerouslySetInnerHTML={{__html:'<p>ppppp</p>'}}></div>
    </React.Fragment>
);
render(ele, window.root)