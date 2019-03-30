import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

let ele=(
    <h1 className="red">
        <span>zzz</span>
        hello,word
    </h1>
);
console.log(React.createElement(
    'h1',
    {className:'red'},
    'hello,word'
));

render(ele,document.getElementById('root'));
