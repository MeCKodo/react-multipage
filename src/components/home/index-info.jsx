import React, { Component } from 'react';
import Header from './home-header';
import Loading from '../common/loading';

export default class info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: 'info',
		};
	}
	
	render() {
		return (
			<div>
				<Loading />
				<Header />
				{this.state.info}
			</div>
		);
	}
};
