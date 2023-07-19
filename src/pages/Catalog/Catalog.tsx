import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'

const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<main className="Main">
			{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
			<Home/>
			<div className="container">
				<div className="Main__wrapper">
					<Filter/>
				</div>
			</div>
			
		</main>
	)
}

export default Catalog