import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import './index.css';

window.mountBlue = (containerId) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById(containerId)
	);
};

window.unmountBlue = (containerId) => {
	const container = document.getElementById(containerId);

	if (container) ReactDOM.unmountComponentAtNode(container);
};
