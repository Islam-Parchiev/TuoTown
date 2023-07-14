import React from 'react';

import Main from './pages/Main';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const  App:React.FC = () => {
	const [toggleSidebar,setToggleSidebar] = React.useState<boolean>(false);
	return (
		<div className="App">
			<Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			
			<Main toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			
			<Footer/>
		</div>
	);
}

export default App;
