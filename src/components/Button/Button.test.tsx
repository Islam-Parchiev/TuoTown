import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event';

import Button from './Button';


describe('Button component',()=> {
		 it('Button renders',()=> {
		 render(<Button 
						 size="medium" 
			variant="secondary" 
			type="two"
			onclick={()=> console.log('click')}
		>Подронее</Button>);

		expect(screen.getByText(/Подронее/i)).toBeInTheDocument();

	});

	it('Button click',()=> {
		const onChange = jest.fn();

		 render(<Button 
			size="medium" 
			variant="secondary" 
			type="two"
			onclick={onChange}
		>Подронее</Button>)


		expect(onChange).toHaveBeenCalledTimes(0);
		userEvent.click(screen.getByText(/Подронее/i))
		expect(onChange).toHaveBeenCalledTimes(1);
	});

})