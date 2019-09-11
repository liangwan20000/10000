// 基于类的组件
// 导入React核心文件
import React from 'react';
// 创建类对象,类组件必须继承React.Component
class Student extends React.Component {
	// 类对象的属性
	constructor (props) {
		// 这里的props和render里面的props相同吗？
		// 传递到基础类
		super (props);
		// 状态定义，固定写法
		this.state = {
			msg: 'hello'
		}
	}
	// 类组件的模板必须通过render提供
	// render是固定的，用于渲染模板
	render () {
		// this.props表示父组件传递过来的数据，他是一个对象
		let { uname } = this.props;
		let { msg } = this.state;
		// 返回jsx元素
		return (
			<div>{uname}{msg}</div>
		)
	}
}
// 导出类组件
export default Student;
