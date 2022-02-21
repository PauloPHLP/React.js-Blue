import { renderWithWrappers } from '../../_shared/test';
import AquaPage from '.';

describe('AquaPage', () => {
	test('Renders AquaPage without crashing and with the correct properties', () => {
		const { container, getByText } = renderWithWrappers(<AquaPage />);

		expect(container).toBeTruthy();
		expect(getByText('Aqua page')).toBeInTheDocument();
		expect(container.firstChild).toHaveStyle(`background-color: aqua;`);
	});
});
