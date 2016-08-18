import React, { Component } from 'react';
import Loading from '../common/loading';
export default class list extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [1, 2, 3]
		}
	}
	
	render() {
		const li = this.state.list.map(item => <li>{item}</li>);
		return (
			<div>
				<Loading />
				<ul>
					{li}
				</ul>
			</div>
		)
	}
}