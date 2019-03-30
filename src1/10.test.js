import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
class Comments extends Component {
    constructor() {

    }
    componentWillMount(){}
    async componentDidMount(){
        let {data:comments}
    }
    handleAdd=(count)=>{
        this.setState({count:this.state.count+count});
    }
}