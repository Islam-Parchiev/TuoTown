
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import Main from './Main';


describe('Main component',()=> {
	jest.mock('swiper/react');
		 it('Main renders',()=> {
		 render(<Main/>);
		//  expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getByText(/Исключительное качество без компромиссов/gi)).toBeInTheDocument();

	});


})