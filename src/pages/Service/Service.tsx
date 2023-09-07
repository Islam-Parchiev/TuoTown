import React from 'react'

import {Helmet} from 'react-helmet';
import { motion } from 'framer-motion';

import Sidebar from '../../components/Sidebar/Sidebar'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'
import ServiceForm from '../../components/ServiceForm/ServiceForm'
import Send from '../../components/Send/Send'

import { IToggleSidebar } from '../../types/Sidebar'

import './Service.scss';



const Service:React.FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Service</title>
			</Helmet>
			<motion.main 
				className="Service"
				initial={{width:0}}
				animate={{width:'100%'}}
				exit={{x:window.innerWidth,transition:{duration:0.1}}}>
				{toggleSidebar === true ? (
					<Sidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				) : null}
				<div className="container Service__container">
					<ServiceHeader/>
					<ServiceForm/>
					<Send/>
				</div>
			</motion.main>
		</>		
	)
}

export default Service