
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


import Main from './Main';


describe('Main component',()=> {
	jest.mock('swiper/react');
	const fn = jest.fn;
		 it('Main renders',()=> {
		 render(<Main setToggleSidebar={fn} toggleSidebar={false}/>);
		//  expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getByText(/Исключительное качество без компромиссов/gi)).toBeInTheDocument();

	});


})