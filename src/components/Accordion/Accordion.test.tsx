import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import Accordion from './Accordion';


describe('Accordion component',()=> {
		 it('Accordion renders',()=> {
		 render(<Accordion title="Accordion"><>tt</></Accordion>);

		expect(screen.getByText('Accordion')).toBeInTheDocument();

	});
	// it('Accordion click',()=> {
	// 	render(<Accordion title="Accordion">
	// 		<ul className="list-reset Accordion__items">
	// 			<li className="Accordion__item">
	// 				<a href="/">
	// 					Складной нож
	// 				</a>
	// 			</li>
	// 			<li className="Accordion__item">
	// 				<a href="/">
	// 					Складной нож
	// 				</a>
	// 			</li>
	// 			<li className="Accordion__item">
	// 				<a href="/">
	// 					Складной нож
	// 				</a>
	// 			</li>
	// 			<li className="Accordion__item">
	// 				<a href="/">
	// 					testttt
	// 				</a>
	// 			</li>
					
	// 		</ul>
	// 	</Accordion>);
	// 	const fn = jest.fn()
	// 	expect(screen.queryByText(/testttt/)).not.toBeVisible();
	// 	userEvent.click(screen.getByText('Accordion'));
	// 	expect(screen.getByText(/testttt/)).toBeVisible();
	// })


})
