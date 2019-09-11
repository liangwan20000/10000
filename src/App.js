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
// import Hello from './Components/Pass-value.js';
// import Tab from './Components/tab-function-component.js';
import LifeCycle from './Components/life-cycle.js';

/**
*	函数组件:大驼峰命名法
*/
// function App() {
// 	// 定义一个变量
// 	let text = 'world';
//   	return (
//   	  	<div>
//   	  		<Hello name="你好"></Hello>
//   	  		<Hello name="hello"></Hello>
//   	  		<Hello name={text}></Hello>
//   	  	</div>
//   	);
// };

// tab案例
// function App () {
// 	let tabInfo = {
// 		tabData : [
// 			{
// 				id: 1,
// 				taitle: 'tom',
// 				content: 'catch jerry'
// 			},
// 			{
// 				id: 2,
// 				taitle: 'jerray',
// 				content: '调戏 tom'
// 			},
// 			{
// 				id: 3,
// 				taitle: 'kitty',
// 				content: '被 tom and Jerry 调戏'
// 			}
// 		],
// 		// 定义一个状态位
// 		currentId : 2
// 	};
// 	return (
// 		<div>
// 			<Tab list={tabInfo}></Tab>
// 		</div>
// 	)
// }

// 类组件
// class App extends React.Component {
// 	// 固定用法
// 	constructor (props) {
// 		super(props)
// 		// this必须在super后面
// 		this.state = {
// 			name: '张三',
// 			age: '18'
// 		}
// 	}

// 	seyhi () {
// 		console.log(this.name + 'hello');
// 	}
// 	// 类组件的模板必须通过render方法提供
// 	// render方法名称是固定的，用于渲染模板
// 	render () {
// 		return (
// 			<div>{this.state.name + this.state.age}</div>
// 		)
// 	}
// }

// class-state
// class App extends React.Component {
	
// 	render () {
// 		// let name = '张三';
// 		return (
// 			<div>
// 				<TabClass uname='张三'></TabClass>
// 			</div>
// 		)
// 	}
// }

// class的生命周期
class App extends React.Component {
	// 构造方法定义属性
	constructor (props) {
		// 向基础类传递值
		super(props);
		// constructor中，this前必须添加super
		this.state = {
			flag : true
		}
	}
	// 组件完成挂载之后触发
	componentDidMount () {
		setTimeout(() => {
			// 修改状态必须使用setState方法
			this.setState({
				flag : false
			})
		}, 3000)
	}
	// 类组件的模板必须通过render方法提供
	// render方法名称是固定的，用于渲染模板
	render () {
		return (
			<div>
				{/*短路表达式，两个都为真取后面的*/}
				{this.state.flag && <LifeCycle></LifeCycle>}
			</div>
		)
	}
}

/**
*	导出组件
*/
export default App;
