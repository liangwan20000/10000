/**
*	react-router
*/
/**
*	引入React核心文件
*/
import React from 'react';
// 导入路由相关组件,大驼峰命名法;他们都是组件，我们的代码是children里的内容；
import { Route, Link, Switch } from 'react-router-dom';

// 主页
let Home = class extends React.Component {
	render () {
		return (
			<div>Home组件</div>
		)
	}
}

// 登录组件一
let One = class extends React.Component {
	render () {
		return (
			<div>One组件</div>
		)
	}
}
let Two = class extends React.Component {
	render () {
		return (
			<div>Two组件</div>
		)
	}
}
let Three = class extends React.Component {
	render () {
		return (
			<div>Three组件</div>
		)
	}
}

// 登录
let Login = class extends React.Component {
	render () {
		return (
			<div>
				<div>Login组件</div>
				<ul>
					<li>
						<Link to='/login/one'>登录组件一</Link>
					</li>
					<li>
						<Link to='/login/two'>登录组件二</Link>
					</li>
					<li>
						<Link to='/login/three'>登录组件三</Link>
					</li>
				</ul>
				<Route path='/login/one' component={ One }></Route>
				<Route path='/login/two' component={ Two }></Route>
				<Route path='/login/three' component={ Three }></Route>
			</div>
		)
	}
}
// 注册
let Register = class extends React.Component {
	render () {
		return (
			<div>register组件</div>
		)
	}
}

// 创建组件
class BrowserRoutercomponent extends React.Component {
	// render导出渲染的模板
	render () {
		return (

			// react-router需要在BrowserRouter组件包裹下使用
			<div>
			{/*<BrowserRouter>*/}
				<ul>
					<li>
						{/*Link组件表示跳转元素*/}
						<Link to="/home">主页</Link>
					</li>
					<li>
						<Link to="/login">登录</Link>
					</li>
					<li>
						<Link to="/register">注册</Link>
					</li>
				</ul>
				{/*使用 Route 视图容器，把请求地址与响应组件对应;Route展示组件内容，它也会占用空间*/}
				<Route path='/home' component={ Home }></Route>
				<Route path='/login' component={ Login }></Route>
				<Route path='/register' component={ Register }></Route>
			{/*// </BrowserRouter>*/}
			</div>
		)
	}
}
/**
*	导出类组件
*/
export default BrowserRoutercomponent;
