import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_SUCCESS_PAGE } from '../utils/constants';
export default class Main extends Component {
	redirect = () => {
		this.props.history.push(LOGIN_SUCCESS_PAGE);
	};
	render() {
		return (
			<div>
				Main - Hello, {this.props.name}
				<hr />
				<br />
				<br />
				{this.props.auth.isAuthenticated() ? (
					<span>
						Go to <Link to={LOGIN_SUCCESS_PAGE}>Secret</Link>
					</span>
				) : (
					<div>
						Please log first
						<br />
						<button onClick={() => this.props.auth.login(this.redirect)}>Login</button>
					</div>
				)}
			</div>
		);
	}
}
