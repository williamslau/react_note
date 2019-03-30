import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Add from './userAdd';
import List from './userList';
import Article from './article';
class user extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            <ul>
                <li>
                    <Link to="/user/add">用户添加</Link>
                </li>
                <li>
                    <Link to="/user/list">用户列表</Link>
                </li>
            </ul>
            <div>
                <Route path="/user/add" component={Add}></Route>
                <Route path="/user/list" component={List}></Route>
                <Route path="/user/article/:id" component={Article}></Route>
            </div>
        </div>)
    }
}
export default user