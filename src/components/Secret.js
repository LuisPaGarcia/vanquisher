import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN_FAILURE_PAGE } from '../utils/constants';
class Secret extends Component {
	redirect = () => {
		this.props.history.push(LOGIN_FAILURE_PAGE);
	};

	render() {
		return (
			<div>
				Secret
				<br />
				<br />
				<button onClick={() => this.props.auth.logout(this.redirect)}>Log out</button>
				<br />
				<br />
				<Link to={LOGIN_FAILURE_PAGE}>Back to Main</Link>
			</div>
		);
	}
}

export default withRouter(Secret);
