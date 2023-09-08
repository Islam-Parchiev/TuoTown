import React from 'react'

import { Helmet } from 'react-helmet'

import Sidebar from '../../components/Sidebar/Sidebar'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'
import ServiceForm from '../../components/ServiceForm/ServiceForm'
import Send from '../../components/Send/Send'

import { IToggleSidebar } from '../../types/Sidebar'

import './Service.scss'

const Service: React.FC<IToggleSidebar> = ({ toggleSidebar, setToggleSidebar }) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Service</title>
			</Helmet>
			<main className="Service">
				{toggleSidebar === true ? (
					<Sidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				) : null}
				<div className="container Service__container">
					<ServiceHeader />
					<ServiceForm />
					<Send />
				</div>
			</main>
		</>
	)
}

export default Service
