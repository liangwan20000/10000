/**
*	重定向
*/
// 引入React核心文件
import React from 'react';
// 引入路由
import { Link, Route, Switch } from 'react-router-dom'

let UserInfo = class extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
				id: 123,
				name: '张三',
				age: 18
			}, {
				id: 456,
				name: '李四',
				age: 19
			}]
		}
	}
	render () {
		let id = this.props.match.params.id
		let info = this.state.list.filter(item => {
			return item.id === parseInt(id)
		});
		return (
			<div>
				<div>用户信息</div>
				<div>用户名：{ info[0].name } </div>
				<div>用户年龄：{ info[0].age }</div>
			</div>
		)
	}
};
let BookInfo = class extends React.Component {
	render () {
		let id = this.props.match.params.bid;
		console.log(this.props.match)
		return (
			<div>
				图是信息：{ id }
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
		<Link to="/user/123">张三</Link>
		<Link to="/user/456">李四</Link>
		<Link to="/user/456/book/111">王五</Link>
		<Link to="/user/456/book/222">赵六</Link>
	{/*Switch只映射匹配到的第一个组件，不设置path的组件，自动成为默认显示的组件*/}
		<Switch>
			<Route path='/user/:id' exact component={ UserInfo }></Route>
			<Route path='/user/:id/book/:bid' component={ BookInfo }></Route>
		</Switch>
	</div>
)
	}
}
// 导出类组件
export default Redirectcomponent;
