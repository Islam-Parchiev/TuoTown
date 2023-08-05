import React from 'react'

import {Helmet} from 'react-helmet';

import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

const Product:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const {id} = useParams()
	console.log(id);
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
			</main>
		</>
	)
}

export default Product