import { renderWithWrappers } from '../../_shared/test';
import CornFlowerBluePage from '../../pages/CornFlowerBluePage';

describe('CornFlowerBluePage', () => {
	test('Renders CornFlowerBluePage without crashing and with the correct properties', () => {
		const { container, getByText } = renderWithWrappers(<CornFlowerBluePage />);

		expect(container).toBeTruthy();
		expect(getByText('Corn Flower Blue page')).toBeInTheDocument();
		expect(container.firstChild).toHaveStyle(
			`background-color: cornflowerblue;`
		);
	});
});
