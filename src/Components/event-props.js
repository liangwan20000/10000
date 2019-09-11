/**
*	事件传参
*/
// 引入React核心文件
import React from 'react';
// 创建类组件
class EventProps extends React.Component {
	// 构造函数
	constructor (props) {
		// 向基础类传递值
		super(props);
		// this之前必须定义super；
		this.state = {
			num: 0,
			list: [
				{
					id: 1,
					bname: '三国演义'
				},
				{
					id: 2,
					bname: '水浒传'
				},
				{
					id: 3,
					bname: '红楼梦'
				},
				{
					id: 4,
					bname: '西游记'
				}
			]
		};
	}
	handle (id, e) {
		console.log(id);
		console.log(e)
	}

	textThis = function () {
		console.log(this);
	}

	// 类组件模板必须通过render方法提供
	// render是固定写法，提供给渲染模板
	render () {
		// 根据数据生成jsx对象
		let jsxLis = this.state.list.map(item => {
			// call、apply、bind都是让左侧对象内的this指向右侧括号内第一个参数；
			// 1. 此处 li 是 jsx 对象
			// 2. bind 让 handle的this 指向 jsx 对象中的 this
			// 3. 此时handle的事件参数 e 是jsx元素的事件参数
			// 4. handle也就能获取到jsx元素的属性
			// 5. handle可以操作jsx元素中的属性，也就形成了闭包
			// 6. 全部的对象、函数都在 window 里，为什么还说是闭包呢？闭包解决的是跨作用域的问题
			return <li key={ item.id } onClick={ this.handle.bind(this, item.id) }>{ item.bname }</li>
		})
		// 返回jsx元素
		return (
			<div>
				<div>{ this.state.num }</div>
				<button onClick={ this.textThis }>点击</button>
				<ul>
					{ jsxLis }
				</ul>
			</div>
		)
	}
}
/**
*	导出类组件
*/
export default EventProps;
