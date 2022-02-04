import ColorSelector from '../ColorSelector';
import './index.css';

function ContentWrapper({ backgroundColor, children }) {
	return (
		<div className="blue-content-wrapper" style={{ backgroundColor }}>
			<div>
				<div>
					<h1>Welcome to the Blue app!</h1>
					<p>Please, select a blue shade</p>
				</div>
			</div>
			<ColorSelector />
			{children}
		</div>
	);
}

export default ContentWrapper;
