import React, { useEffect, useRef, useState } from 'react'

import {Helmet} from 'react-helmet';

import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useAppDispatch } from '../../redux/store';


import Sidebar from '../../components/Sidebar/Sidebar';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductVideo from '../../components/ProductVideo/ProductVideo';
import Specifications from '../../components/Specifications/Specifications';
import { ICard } from '../../types/Card';


import { addItem } from '../../redux/slices/cartSlice';
import ToTop from '../../components/ToTop/ToTop';

const Product:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const {id} = useParams()
	const [product,setProduct] = useState<ICard>();

	const mainRef = useRef<any>()
	const [scroll, setScroll] = useState<number>(0);
	console.log(scroll)
  	const handleScroll = () => {
   	 setScroll(window.scrollY);
 	 };


  	useEffect(() => {
		// console.log(scroll);
   	 window.addEventListener('scroll', handleScroll);
   	 return () => window.removeEventListener('scroll', handleScroll);
  	}, []);

	useEffect(() => {
		async	function fetchData() {
				  try {
				
	  
				  // http://localhost:4200/knives?_page=${page}&_limit=6${search.length > 0 ? search : null}
				  const {data} = await axios.get(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items/${id}`)
				setProduct(data);
			  }catch(e) {
   
				  alert(e);
			  }
		  }
  
		  fetchData()
	  
		  
  
	  }, [id])
	const dispatch = useAppDispatch();

	const onClickAdd = () => {
		// @ts-ignore
		const {id,price,imageUrl,title} = product;
		const item = {
			id,
			price,
			imageUrl,
			title,
		}
		// @ts-ignore
		dispatch(addItem({...item,count:1}))	
		console.log('click')
	}
	
	return(
		 <>
			<Helmet>
				<meta charSet="utf-8"/>
				{/* @ts-ignore */}
				<title>{product?.title}</title>
			</Helmet>

			<main ref={mainRef} className="Product">
				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/> :null}
				{scroll > 1500 ? <ToTop/> :null}

				{/* @ts-ignore */}
         	<ProductQuantity  productTitle={product?.title} productPrice={product?.price}onClickAdd={onClickAdd}/>
				<ProductInfo/>
				<ProductSlider/>
				<ProductVideo/>
				<Specifications/>
			</main>
		</>
	)
}

export default Product