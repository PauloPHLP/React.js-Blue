import { renderWithWrappers } from '../../_shared/test';
import Home from '../../pages/Home';

describe('Home', () => {
	test('Renders Home without crashing and with the correct properties', () => {
		const { container, getByText } = renderWithWrappers(<Home />);

		expect(container).toBeTruthy();
		expect(getByText('Initial page')).toBeInTheDocument();
		expect(container.firstChild).toHaveStyle(`background-color: darkgray;`);
	});
});
