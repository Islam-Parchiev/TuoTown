import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import AboutUs from './AboutUs';


describe('AboutUs component',()=> {
		 it('AboutUs renders',()=> {
		 render(<AboutUs/>);
		//  expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getByTestId('AboutUs')).toBeInTheDocument();

	});


})