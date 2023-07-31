import React from 'react'

import styles from './MapHeader.module.scss'

const MapHeader: React.FC = () => {
	return (
		<div className={styles.Map__header}>
			<div className="container">
				<h1 className={styles.Map__title}>Карта</h1>
			</div>
		</div>
	)
}

export default MapHeader
