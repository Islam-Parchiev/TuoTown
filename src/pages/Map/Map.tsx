import React from 'react'

import {Helmet} from 'react-helmet';


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
			<main 
				className="Map">
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
			</main>
		</>
	)
}

export default Map