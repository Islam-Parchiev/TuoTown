import React from 'react';



import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Router from './components/Router/Router';

const  App:React.FC = () => {
	const [toggleSidebar,setToggleSidebar] = React.useState<boolean>(false);
	
	return (
		<div className="App">
			<Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			<Router toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			<Footer/>
			
		</div>
	);
}

export default App;
