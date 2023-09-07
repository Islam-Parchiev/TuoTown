import {FC, useRef,useEffect, useState} from 'react'

import {Helmet} from 'react-helmet';
import { motion } from 'framer-motion';

import Quantity from '../../components/Quantity/Quantity'
import Categories from '../../components/Categories/Categories'
import AboutUs from '../../components/AboutUs/AboutUs'
import Interesting from '../../components/Interesting/Interesting'
import Sidebar from '../../components/Sidebar/Sidebar'
import ToTop from '../../components/ToTop/ToTop';
import { IToggleSidebar } from '../../types/Sidebar';

const Main:FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	const mainRef = useRef<HTMLElement>(null)
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
			<motion.main 
				ref={mainRef} 
				className="Main"
				initial={{width:0}}
				animate={{width:'100%'}}
				exit={{x:window.innerWidth,transition:{duration:0.1}}}>
				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
				{scroll > 1500 ? <ToTop/> :null}
				<Quantity/>
				<Categories/>
				<AboutUs/>
				<Interesting/>
			
			</motion.main>
		</>
	)
}

export default Main