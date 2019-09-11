/**
*	tab完整版
*/
/**
*	引入React核心文件
*/
import React from 'react';
/**
*	引入样式文件
*/
import '../static/index.css';

// 定义类组件
class Tab extends React.Component {
	// 构造函数
	constructor (props) {
		// 向基础类传递值
		super(props);
		// this前必须添加super
		this.state = {
			tabData : [
				{
					id: 1,
					taitle: 'tom',
					content: 'catch jerry'
				}, {
					id: 2,
					taitle: 'jerray',
					content: '调戏 tom'
				}, {
					id: 3,
					taitle: 'kitty',
					content: '被 tom and Jerry 调戏'
				}
			],
			// 定义一个状态位
			currentId : 2
		};
	}
	// 点击时改变状态位的值
	handle = function (id, e) {
		// console.log(e);
		console.log(id);
		this.setState({
			currentId: id
		})
	}
	// 类组件的模板必须通过render提供
	// render方法名称是固定的，提供渲染的模板
	render () {
		// 定义两个空数组
		let btns = [];
		let divs = [];
		// 根据数据动态生成jsx对象,(虚拟DMO)
		this.state.tabData.forEach((item) => {
			btns.push(<button
				className={ this.state.currentId === item.id ? 'current' : '' }
				key={ item.id }
				onClick={ this.handle.bind(this, item.id) }
				>{ item.taitle }</button>);
			divs.push(<div
				className={ this.state.currentId === item.id ? 'current' : '' }
				key={ item.id }
				>{ item.content }</div>)
		});
		// 返回jsx元素
		return (
			<div className='abc'>
				{ btns }
				{ divs }
			</div>
		)
	}
}
/**
*	导出tab类组件
*/
export default Tab;
