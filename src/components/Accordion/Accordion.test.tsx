import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import Accordion from './Accordion';


describe('Accordion component',()=> {
		 it('Accordion renders',()=> {
		 render(<Accordion title="Accordion"><>tt</></Accordion>);

		expect(screen.getByText('Accordion')).toBeInTheDocument();

	});


})
