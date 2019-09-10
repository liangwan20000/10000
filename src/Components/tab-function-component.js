// tab案例重构
// 引入React核心文件
import React from 'react';
// 引入样式文件
import '../static/index.css';
// 定义函数组件
function Tab (props) {
	// 定义两个变量，接收生成的数据
	let btns = [];
	let divs = [];
	// 动态创建tab
	props.list.tabData.forEach(item => {
		btns.push(<button className={ props.currentId === item.id ? "current" : '' } key={ item.id }>{ item.taitle }</button>);
		divs.push(<div className={ props.currentId === item.id ? "current" : '' } key={ item.id }>{ item.content }</div>);
	});
	return (
		// 添加类名，以便添加子节点样式
		<div className="abc">
			{ btns }
			{ divs }
		</div>
	)
};
// 导出函数组件
export default Tab;
