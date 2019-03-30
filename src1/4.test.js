import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

function school(name, age) {
    return <h1>{name}{age}</h1>
};
let el=(
    <div>{school('william',9)}</div>
)
let dinner = ['汉堡', '可乐', '薯条'];
let ele = dinner.map((item, index) => (
    <li key={index}>{item}</li>
));
render(ele,window.root);
