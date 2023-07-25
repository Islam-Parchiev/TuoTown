import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

const Service:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<main className="Service">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			Service
		</main>
	)
}

export default Service