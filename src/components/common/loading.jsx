import React, { Component } from 'react';

export default class loading extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>我是全局通用的,loading组件,会编译所有js文件2</div>
		)
	}
}
