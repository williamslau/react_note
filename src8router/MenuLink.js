import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, Route } from 'react-router-dom';

// children就是不过路径是否匹配到都能执行
export default function (p) {
    console.log(p);
    return <Route path={p.to} exact={p.exact || false} children={(props) => {
        return <li className={props.match ? 'active' : ''}>
            <Link to={p.to}>{p.children}</Link>
        </li>
    }}>

    </Route>
}