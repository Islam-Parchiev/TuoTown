import React from 'react';

import {Route,Routes} from 'react-router-dom'

import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import Basket from './pages/Basket/Basket';
import Service from './pages/Service/Service';
import Map from './pages/Map/Map';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

const  App:React.FC = () => {
	const [toggleSidebar,setToggleSidebar] = React.useState<boolean>(false);
	return (
		<div className="App">
			<Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
			<Routes>
				<Route path="/" element={<Main toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/> }/>
				<Route path="/catalog" element={<Catalog toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
				<Route path="/basket" element={<Basket toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
				<Route path="/service" element={<Service toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
				<Route path="/map" element={<Map toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
				<Route path="/product/:id" element={<Product toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
				<Route path="*" element={<NotFound toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}/>
			</Routes>
			<Footer/>
			
		</div>
	);
}

export default App;
