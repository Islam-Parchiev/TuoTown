import React from 'react';

import MapNav from '../MapNav/MapNav'
import MapContent from '../MapContent/MapContent';

import styles from './MapBody.module.scss';

const MapBody: React.FC = () => {
	return (
		<section className={styles.Map__body}>
			<div className="container">
				<MapNav/>
				<MapContent/>
			</div>
		</section>
	)
}

export default MapBody
