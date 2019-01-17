import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const title = 'My Minimal React Webpack Setup';

const tracks = [
	{
		title: 'some track'
	},
	{
		title: 'some other track'
	}
]

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
	<Stream />,
	document.getElementById('app')
);

module.hot.accept();