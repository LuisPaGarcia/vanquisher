import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';
import { ThemeProvider } from '@chakra-ui/core';

const auth = new Auth();

let initialState = {
	name: 'Luispa',
	location: document.location.pathname.replace(/^\/?|\/$/g, ''),
	auth
};

ReactDOM.render(
	<ThemeProvider>
		<App {...initialState} />
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
