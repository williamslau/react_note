//受保护的路由
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
// Component 如果登陆就要渲染这个组件 把其他属性变成一个对象
// 默认情况下Router组件传入的是component={}
// 如果添加功能render={（）=> {}} 唯一的不同是render是一个函数，返回的结果会被直接渲染
export default function ({ component: Component, ...rest }) {
    return localStorage.getItem('login')?<Route {...rest} component={Component}/>:<Redirect to="/login"/>
    // return <Route {...rest} render={(props) => {
    //     return localStorage.getItem('login') ? <Component {...props}></Component> :<Redirect to="/login"/>;
    // }}></Route>
}