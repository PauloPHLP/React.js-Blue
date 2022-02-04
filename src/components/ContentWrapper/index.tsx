import { ReactChild } from 'react';

import ColorSelector from '../ColorSelector';
import './index.css';

interface ContentWrapperProps {
	backgroundColor: string;
	children: ReactChild;
}

function ContentWrapper({ backgroundColor, children }: ContentWrapperProps) {
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
