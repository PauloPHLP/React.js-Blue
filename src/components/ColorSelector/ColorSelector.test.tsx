import { renderWithWrappers } from '../../_shared/test';
import ColorSelector from '.';

describe('ColorSelector', () => {
	test('Renders ColorSelector without crashing', () => {
		const { container } = renderWithWrappers(<ColorSelector />);

		expect(container).toBeTruthy();
	});

	test('Renders all three buttons on the list', () => {
		const { getByText } = renderWithWrappers(<ColorSelector />);

		expect(getByText('Initial')).toBeInTheDocument();
		expect(getByText('Aqua')).toBeInTheDocument();
		expect(getByText('Corn Flower Blue')).toBeInTheDocument();
	});
});
