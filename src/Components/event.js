/**
*	类中定义事件
*/
// 引入React核心文件
import React from 'react';
// 定义类
class Event extends React.Component {
	// 构造函数创建属性
	constructor (props) {
		// 向基础类传递值
		super(props);
		// this之前，必须添加super
		// state中定义状态
		this.state = {
			number: 1
		};
		// 类对象改变this指向，需要在构造函数内进行；
		// 使用箭头函数就不需要改变this指向了
		this.handle = this.handle.bind(this);
	}
	// 点击改变状态
	handle () {
		// 调用setState方法改变值
		this.setState({
			number: this.state.number + 1
		})
	}
	// 类组件模板要通过render方法提供
	// render方法名是固定写法，提供要渲染的模板
	render () {
		// 返回模板
		return (
			<div>
				<div>{ this.state.number }</div>
				<button onClick={ this.handle }>点击</button>
			</div>
		)
	}
};
/**
*	导出类组件
*/
export default Event;
