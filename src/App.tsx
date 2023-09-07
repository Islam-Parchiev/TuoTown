import React from 'react';

import {useLocation} from 'react-router-dom'


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

const  App:React.FC = () => {
	const [toggleSidebar,setToggleSidebar] = React.useState<boolean>(false);
	const location = useLocation();
	return (
		<div className="App">
			<Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			<AnimatedRoutes toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			<Footer/>
			
		</div>
	);
}

export default App;
