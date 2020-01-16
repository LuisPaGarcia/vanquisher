import React from 'react';
import './App.scss';
import Landing from './components/landing/';
import Dashboard from './components/dashboard';
import NotFound from './components/NotFound';
import Callback from './components/Callback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Use at the root of your app

function App(props) {
	return (
		// <div className="App">
		<Router>
			<Switch>
				<Route path="/" exact render={() => <Landing {...props} />} />
				<Route path="/callback" component={Callback} />
				<ProtectedRoute path="/dashboard" component={() => <Dashboard {...props} />} {...props} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
		// </div>
	);
}

export default App;
