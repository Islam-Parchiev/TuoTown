import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'
import ServiceForm from '../../components/ServiceForm/ServiceForm'

const Service:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<div className="Service">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			<div className="container">
				<ServiceHeader/>
				<ServiceForm/>
			</div>
		</div>
	)
}

export default Service