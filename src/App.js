import React from 'react';
import './App.scss';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Use at the root of your app

function App(props) {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact render={() => <Main {...props} />} />
					<Route path="/callback" component={Callback} />
					<ProtectedRoute path="/secret" component={() => <Secret {...props} />} {...props} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
