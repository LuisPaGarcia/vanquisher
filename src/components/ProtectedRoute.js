import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NOT_FOUND_PAGE } from '../utils/constants';

export default class ProtectedRoute extends Component {
	render() {
		return this.props.auth.isAuthenticated() ? (
			<Route path={this.props.path} component={this.props.component} />
		) : (
			<Redirect to={NOT_FOUND_PAGE} />
		);
	}
}
