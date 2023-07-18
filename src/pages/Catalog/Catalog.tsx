import React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'

const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<main className="Main">
			{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
			<Home/>
		</main>
	)
}

export default Catalog