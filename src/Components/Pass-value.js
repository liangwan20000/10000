/**
*	组件传值
*/
/**
*	引入react核心文件
*/
import React from 'react';
// 引入样式
import '../static/index.css'

// 定义函数组件
function Hello (props) {
	// 返回jsx元素
	return <div className='active'>{props.name}</div>;
};
// 导出函数组件
export default Hello;