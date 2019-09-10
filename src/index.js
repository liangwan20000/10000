/*
	index.js是React入口文件
*/
/*
	引入React核心包
*/
import React from 'react';
/*
	ReactDOM是react-dom的软件包对象，它提供了可在应用顶层使用的DOM方法
*/
import ReactDOM from 'react-dom';
/*
	引入入口文件的样式
*/
import './index.css';
/*
	引入入口组件
*/
import App from './App';
/*
	ReactDOM是React-dom的软件包对象，它提供了可在应用层使用的DOM方法
	render接口，在一个指定的container中渲染React元素，1、React元素，2、容器
*/
ReactDOM.render(<App />, document.getElementById('root'));
