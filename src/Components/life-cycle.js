/**
*	类组件的生命周期
*/
/**
*	引入React核心文件
*/
import React from 'react';

// 定义类组件
class LifeCycle extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			message: 2
		}
	}
	// 组件完成挂载之后触发，类似于vue中的mounted
	componentDidMount () {
		console.log('组件挂载成功后触发');
	}
	// 组件将要卸载时触发;这里一般用于请理性工作，比如销毁一些资源（销毁定时任务，取消事件绑定）
	componentWillUnmount () {
		console.log('组件卸载前触发');
	}
	// 类组件的模板必须通过render提供
	// render方法名称是固定的，用于渲染模板
	render () {
		return (
			<div>{ this.state.message }</div>
		)
	}
};

/**
*	导出类组件
*/
export default LifeCycle;
