import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

function App(props) {
	let MainComponent = '';
	switch (props.location) {
		case '':
			MainComponent = <Main {...props} />;
			break;
		case 'callback':
			MainComponent = <Callback />;
			break;
		case 'secret':
			MainComponent = props.auth.isAuthenticated() ? <Secret {...props} /> : <NotFound />;
			break;
		default:
			MainComponent = <NotFound />;
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hola <code>{props.name}</code>.
				</p>
				{MainComponent}
			</header>
		</div>
	);
}

export default App;
