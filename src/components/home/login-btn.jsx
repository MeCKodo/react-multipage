import React, { Component } from 'react';
import Header from './home-header';
export default class Btn extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Header />
				<p>我是login页面的Btn组件</p>
			</div>
		)
	}
}