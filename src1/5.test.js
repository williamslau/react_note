import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

function School(props) {
    return <h1>{props.name}{props.age.a}</h1>
}

render(<School name="william" age={{ a: 100 }}></School>, window.root);