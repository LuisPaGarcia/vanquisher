import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div>
				Main - Hello, {this.props.name}
				<hr />
				<br />
				<br />
				{this.props.auth.isAuthenticated() ? (
					<span>
						Go to <a href="/secret"> Secret</a>
					</span>
				) : (
					<div>
						Please log first
						<br />
						<button onClick={this.props.auth.login}>Login</button>
					</div>
				)}
			</div>
		);
	}
}
