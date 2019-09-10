/*
	引入React核心文件
*/
import React from 'react';

/*
	引入入口组件的样式文件
*/
import './App.css';

/**
*	导入组件
*/
// import Hello from './Components/function-component.js';
import Hello from './Components/Pass-value.js';

/**
*	函数组件:大驼峰命名法
*/
function App() {
	// 定义一个变量
	let text = 'world';
  	return (
  	  	<div>
  	  		<Hello name="你好"></Hello>
  	  		<Hello name="hello"></Hello>
  	  		<Hello name={text}></Hello>
  	  	</div>
  	);
};
/**
*	导出组件
*/
export default App;
