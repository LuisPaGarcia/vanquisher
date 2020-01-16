import React, { useContext } from 'react';
import { Context } from '../stores/store';

function AppTitle() {
	const { store } = useContext(Context);
	return <h1>{store}</h1>;
}

export { AppTitle };
