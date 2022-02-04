import { useNavigate } from 'react-router-dom';

import './index.css';

function ColorSelector() {
	const navigate = useNavigate();

	const handleOnClick = (route: string) => {
		navigate(route);
	};

	return (
		<div className="blue-buttons-container">
			<button
				className="color-selector initial"
				onClick={() => handleOnClick('/blue')}
			>
				Initial
			</button>
			<button
				className="color-selector aqua"
				onClick={() => handleOnClick('/blue/aqua')}
			>
				Aqua
			</button>
			<button
				className="color-selector corn-flower-blue"
				onClick={() => handleOnClick('/blue/corn-flower-blue')}
			>
				Corn Flower Blue
			</button>
		</div>
	);
}

export default ColorSelector;
