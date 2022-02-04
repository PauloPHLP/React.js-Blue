import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import './index.css';

declare global {
	interface Window {
		mountBlue: Function;
		unmountBlue: Function;
	}
}

window.mountBlue = (containerId: string) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById(containerId)
	);
};

window.unmountBlue = (containerId: string) => {
	const container = document.getElementById(containerId);

	if (container) ReactDOM.unmountComponentAtNode(container);
};
