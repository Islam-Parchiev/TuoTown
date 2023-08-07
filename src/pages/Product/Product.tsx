import React from 'react'

import {Helmet} from 'react-helmet';

import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductVideo from '../../components/ProductVideo/ProductVideo';
import Specifications from '../../components/Specifications/Specifications';

const Product:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const {id} = useParams()
	console.log(id,'rrrrr');
	return(
		 <>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Product</title>
			</Helmet>

			<main className="Product">
				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/> :null}

         	<ProductQuantity/>
				<ProductInfo/>
				<ProductSlider/>
				<ProductVideo/>
				<Specifications/>
			</main>
		</>
	)
}

export default Product