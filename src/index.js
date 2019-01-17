import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Setup';

const tracks = [
	{
		title: 'some track'
	},
	{
		title: 'some other track'
	}
]
ReactDOM.render(
<div>
	{
		tracks.map((track, key) => {
			return <div className="track" key={key}>{track.title}</div>
		})
	}
</div>,
	document.getElementById('app')
	);

module.hot.accept();