import React, { Component } from 'react';

export default class top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: 'header',
		};
	}
	render () {
		return (
			<header>
				我是home业务模块下的,header组件,修改了我home业务模块下的js都会被编译
				<figure >
					<img style={{display:'block'}} src={require('images/home/logo.jpg')} width="100" height="100" />
					测试引入资源文件
				</figure>
			</header>
		)
	}
}
