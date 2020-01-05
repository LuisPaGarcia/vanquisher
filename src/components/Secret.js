import React, { Component } from 'react';

export default class Secret extends Component {
	render() {
		return (
			<div>
				Secret
				<br />
				<br />
				<button onClick={this.props.auth.logout}>Log out</button>
				<br />
				<br />
				<a href="/">Back to Main</a>
			</div>
		);
	}
}
