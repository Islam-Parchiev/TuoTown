import React from 'react';

import Main from './pages/Main';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const  App:React.FC = () => {
	return (
		<div className="App">
			<Header/>
			
			<Main/>
			
			<Footer/>
		</div>
	);
}

export default App;
