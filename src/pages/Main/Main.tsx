import {FC, useRef,useEffect, useState} from 'react'

import {Helmet} from 'react-helmet';


import Quantity from '../../components/Quantity/Quantity'
import Categories from '../../components/Categories/Categories'
import AboutUs from '../../components/AboutUs/AboutUs'
import Interesting from '../../components/Interesting/Interesting'
import Sidebar from '../../components/Sidebar/Sidebar'
import ToTop from '../../components/ToTop/ToTop';

const Main:FC<any> = ({toggleSidebar,setToggleSidebar}) => {
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
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Main</title>
			</Helmet>
			<main ref={mainRef} className="Main">
				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
				{scroll > 1500 ? <ToTop/> :null}
				<Quantity/>
				<Categories/>
				<AboutUs/>
				<Interesting/>
			
			</main>
		</>
	)
}

export default Main