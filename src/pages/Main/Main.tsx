import {FC} from 'react'

import {Helmet} from 'react-helmet';


import Quantity from '../../components/Quantity/Quantity'
import Categories from '../../components/Categories/Categories'
import AboutUs from '../../components/AboutUs/AboutUs'
import Interesting from '../../components/Interesting/Interesting'
import Sidebar from '../../components/Sidebar/Sidebar'

const Main:FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Main</title>
			</Helmet>
			<main className="Main">
				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
				<Quantity/>
				<Categories/>
				<AboutUs/>
				<Interesting/>
			
			</main>
		</>
	)
}

export default Main