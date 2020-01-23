import React from 'react';
import './App.scss';
import Landing from './components/landing/';
import Dashboard from './components/dashboard';
import NotFound from './components/NotFound';
import Callback from './components/Callback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App(props) {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/callback" component={Callback} />
				<ProtectedRoute path="/dashboard" component={() => <Dashboard {...props} />} {...props} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
