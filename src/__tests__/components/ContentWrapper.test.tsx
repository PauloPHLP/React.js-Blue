import { renderWithWrappers } from '../../_shared/test';
import ContentWrapper from '../../components/ContentWrapper';

describe('ContentWrapper', () => {
	test('Renders ContentWrapper without crashing and with the correct properties', () => {
		const { container, getByText } = renderWithWrappers(
			<ContentWrapper backgroundColor="darkgray">
				<div>Content Wrapper</div>
			</ContentWrapper>
		);

		expect(container).toBeTruthy();
		expect(getByText('Content Wrapper')).toBeInTheDocument();
		expect(container.firstChild).toHaveStyle(`background-color: darkgray;`);
	});

	test('Renders ContentWrapper with correct texts', () => {
		const { container, getByText } = renderWithWrappers(
			<ContentWrapper backgroundColor="darkgray">
				<div>Content Wrapper</div>
			</ContentWrapper>
		);

		expect(getByText('React.js')).toBeInTheDocument();
		expect(getByText('Welcome to the Blue app!')).toBeInTheDocument();
		expect(getByText('Please, select a blue shade')).toBeInTheDocument();
	});
});
