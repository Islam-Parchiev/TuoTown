import React from 'react'

import {Helmet} from 'react-helmet';
import { motion } from 'framer-motion';

import './Map.scss';
import { IToggleSidebar } from '../../types/Sidebar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MapHeader from '../../components/MapHeader/MapHeader';
import MapBody from '../../components/MapBody/MapBody';


const Map:React.FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Map</title>
				
			</Helmet>
			<motion.main 
				className="Map"
				initial={{width:0}}
				animate={{width:'100%'}}
				exit={{x:window.innerWidth,transition:{duration:0.1}}}>
				{toggleSidebar === true ? (
					<Sidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				) : null}
			  <div className="Map__wrapper">
					<MapHeader/>
					<MapBody/>
				</div>
			</motion.main>
		</>
	)
}

export default Map