/**
*	重定向
*/
// 引入React核心文件
import React from 'react';
// 引入路由
import { Link, Route, Switch, Redirect } from 'react-router-dom'

let Login = class extends React.Component {
	render () {
		return (
			<div>登录组件</div>
		)
	}
}
let Register = class extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			token: false
		}
	}
	render () {
		return (
			<div>
				{ this.state.token ? <div>登录</div> : <Redirect to='/login'></Redirect> }
			</div>
		)
	}
}

// 创建类组件
class Redirectcomponent extends React.Component {
	// render返回渲染的模板
	render () {
		return (
			<div>
				<Link to="/login">登录</Link>
				<Link to="/regi">测试</Link>
				<Link to="/register">注册</Link>
			{/*Switch只映射匹配到的第一个组件，不设置path的组件，自动成为默认显示的组件*/}
				<Switch>
					<Route path='/login' component={ Login }></Route>
					<Route path='/regi' component={ Register }></Route>
					<Redirect from='/register' to='/login'></Redirect>
				</Switch>
			</div>
		)
	}
}
// 导出类组件
export default Redirectcomponent;
