import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'

const Service:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<div className="Service">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			<ServiceHeader/>
		</div>
	)
}

export default Service