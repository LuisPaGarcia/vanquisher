import React from 'react';
import logo from './logo.svg';
import './App.css';
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
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hola <code>{props.name}</code>.
				</p>
				<Router>
					<Switch>
						<Route path="/" exact render={() => <Main {...props} />} />
						<Route path="/callback" component={Callback} />
						<ProtectedRoute path="/secret" component={() => <Secret {...props} />} {...props} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
