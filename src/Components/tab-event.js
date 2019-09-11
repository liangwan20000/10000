/**
*	tab完整版
*/
/**
*	引入React核心文件
*/
import React from 'react';
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

	
}