import React, { useContext } from 'react';
import { Context } from '../stores/store';

function SpanExample() {
	const { store } = useContext(Context);
	return <span>{store}</span>;
}

export { SpanExample };
