import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'
import ServiceForm from '../../components/ServiceForm/ServiceForm'
import Send from '../../components/Send/Send'

import { IToggleSidebar } from '../../types/Sidebar'

import './Service.scss';



const Service:React.FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<div className="Service">
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
		</div>
	)
}

export default Service