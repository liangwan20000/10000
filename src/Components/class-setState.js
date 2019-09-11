/**
*setState的使用
*/
/**
*	引入React核心文件
*/
import React from 'react';

// 创建类组件,继承基础类
class SetState extends React.Component {
	// 构造方法中设置属性
	constructor (props) {
		// 向基础类传递值
		super(props);
		// this之前必须有super
		this.state = {
			message: 2
		};
	}
	// 组件挂载后，类似于vue中的mounted
	componentDidMount () {
		// setTimeout(() => {
		// 	// 修改状态必须使用setState方法
		// 	this.setState({
		// 		message: 3
		// 	})
		// }, 2000)
		//--------------------------------------

		// 状态的修改是异步的
		// this.setState({
		// 	message:4
		// });
		// // 打印是2
		// console.log(this.state.message);
		//------------------------------------------

		// setState有回调函数
		// this.setState({
		// 	message: 5
		// }, () => {
		// 	// 后执行打印是5，以后改变状态后的程序都在这里写
		// 	console.log(this.state.message + '111');
		// });
		// // 在this.setState前执行？
		// console.log(this.state.message);
		//---------------------------------------------------

		// setState不能保证调用多次就更新对应的次数
		// React为了提高页面的更新性能，会把多次更新合并为一次
		// 不要频繁调用setState
		this.setState({
			message: this.state.message + 1
		});
		this.setState({
			message: this.state.message + 2
		});
		this.setState({
			message: this.state.message + 3
		});
		
	}
	// 类组件的模板必须通过render提供
	// render是固定写法，用于渲染模板
	render () {
		// 解构state
		let { message } = this.state;
		let { name } = this.props;
		return (
			<div>
				{ message }{ name }
			</div>
		)
	}
}

/**
*	导出类组件
*/
export default SetState;
