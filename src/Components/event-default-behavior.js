/**
*	组织事件的默认行为
*/
// 引入React核心文件
import React from 'react';
// 创建类组件
class EventDefaultBehavior extends React.Component {
	// 构造函数
	constructor (props) {
		// 向基础类传递值
		super(props);
		// 类的构造函数中要使用this时，前面必须定义super
		this.state = {
			Number : 1
		};
		// 改变事件this指向
		this.handle = this.handle.bind(this);
	}
	handle (e) {
		// 改变状态必须使用setState
		this.setState({
			Number : this.state.Number + 1
		});
		e.preventDefault();
	}
	// 类组件的模板必须通过render提供
	// render方法是固定写法，用于渲染模板
	render () {
		// 返回jsx元素
		return (
			<div>
				<div>{ this.state.Number }</div>
				<a href="http://www.baidu.com" onClick={ this.handle }>点击</a>
			</div>
		)
	}
}
/**
*	导出类组件
*/
export default EventDefaultBehavior;
