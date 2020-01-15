import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN_FAILURE_PAGE } from '../utils/constants';
import { Button } from '@chakra-ui/core';

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
				<Button onClick={() => this.props.auth.logout(this.redirect)}>Log out</Button>
				<br />
				<br />
				<Link to={LOGIN_FAILURE_PAGE}>Back to Main</Link>
			</div>
		);
	}
}

export default withRouter(Secret);
