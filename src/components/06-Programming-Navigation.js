/**
*	编程式导航
*/
// 引入核心文件
import React from 'react';
// 引入路由
import { Link, Route, withRouter } from 'react-router-dom';

let User = class extends React.Component {
	render () {
		// this.props.location.state中包含了导航时携带的参数
		let uname = this.props.location.state.name;
		return (
			<div>用户名：{ uname }</div>
		)
	}
}
let Login = class extends React.Component {
	// 点击跳转到Home组件
	toLogin = () => {
		// 取出history，用于跳转
		let { history } = this.props;
		// 设置跳转
		history.push('/user', {name: '李四'});
	}
	render () {
		return (
			<div>
				<div>登录</div>
				<div>
					用户名：<input type="text"/>
				</div>
				<div>
					密码：<input type="text"/>
				</div>
				<div>
					<button onClick={ this.toLogin }>点击</button>
				</div>
			</div>
		)
	}
}

// 创建类组件
class ProgrammingNavigation extends React.Component {
	// render提供渲染的类组件模板
	render () {
		return (
			<div>
				<Link to='/user'>主页</Link>
				<Link to='/login'>登录</Link>
				<Route path='/user' component={ User }></Route>
			{/*使用withRouter包裹使用了编程式导航的组件，withRouter执行了history.push*/}
				<Route path='/login' component={ withRouter(Login) }></Route>
			</div>
		)
	}
}
// 导出类组件
export default ProgrammingNavigation;
