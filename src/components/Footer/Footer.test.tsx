import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Footer from './Footer';

describe('Footer component',()=> {
	it('Footer renders',()=> {
		render(<Footer data-testid="footer"/>);
		expect(screen.getByTestId('footer')).toBeInTheDocument()
	})
})