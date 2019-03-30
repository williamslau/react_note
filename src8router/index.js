import React from 'react';
import { render } from 'react-dom'

import { BrowserRouter as Router, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import Home from './home'
import Blog from './blog'
import User from './user'
import Login from './login'

import Protected from './Protected'
import MenuLink from './MenuLink';
render(<React.Fragment>
	<Router>
		<ul>
			<li><Link to={{ pathname: '/home', search: "?id=100" }}>首页</Link></li>
			<li><Link to="/user">用户（二级路由）</Link></li>
			<li><Link to="/blog">博客</Link></li>
			<li><Link to="/login">登陆</Link></li>
		</ul>
		<ul>
			{/* <li><NavLink to={{ pathname: '/home', search: "?id=100" }} exact={true}>首页</NavLink></li>
			<li><NavLink to="/user">用户（二级路由）</NavLink></li>
			<li><NavLink to="/blog">博客</NavLink></li>
			<li><NavLink to="/login">登陆</NavLink></li> */}
			<MenuLink to="/home" exact={true}>首页</MenuLink>
			<MenuLink to="/user" exact={true}>用户</MenuLink>
			<MenuLink to="/blog" exact={true}>博客</MenuLink>
			<MenuLink to="/login" exact={true}>登陆</MenuLink>
		</ul>
		<Switch>
			<Route path="/home" component={Home} />
			<Protected path="/user" component={User} />
			<Route path="/user" component={User} />
			<Route path="/blog" component={Blog} />
			<Route path="/login" component={Login} />
			<Redirect to="home"></Redirect>
		</Switch>
	</Router>
</React.Fragment>, window.root);

// 最简单的路由，
// BrowserRouter 浏览器路由
// HashRouter   带#的路由
// search用来传参
// 二级路由在user中
// /user/atricle/:id 可以传参

// 高阶组件，我们希望点击blog的时候判断登陆状态
