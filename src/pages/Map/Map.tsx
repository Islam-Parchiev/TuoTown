import React from 'react'

import './Map.scss';
import { IToggleSidebar } from '../../types/Sidebar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MapHeader from '../../components/MapHeader/MapHeader';
import MapBody from '../../components/MapBody/MapBody';

const Map:React.FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<main className="Map">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			
			<MapHeader/>
			<MapBody/>
	
		</main>
	)
}

export default Map