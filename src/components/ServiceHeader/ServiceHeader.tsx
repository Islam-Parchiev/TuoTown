import React from 'react'

import styles from './ServiceHeader.module.scss'

const ServiceHeader: React.FC = () => {
	return (
		<div className={styles.ServiceHeader}>
			<div className={`container ${styles.ServiceHeader__container}`}>
				<h1 className={styles.ServiceHeader__title}>Сервис</h1>
				<ul className={`list-reset ${styles.ServiceHeader__nav}`}>
					<li className={styles.ServiceHeader__nav_item}>
						<a href="/">Сервисные центры</a>
					</li>
					<li className={styles.ServiceHeader__nav_item}>
						<a href="/">Сервисные центры</a>
					</li>
					<li className={styles.ServiceHeader__nav_item}>
						<a href="/">Сервисные центры</a>
					</li>
					<li className={styles.ServiceHeader__nav_item}>
						<a href="/">Сервисные центры</a>
					</li>
					<li className={styles.ServiceHeader__nav_item}>
						<a href="/">Сервисные центры</a>
					</li>
				</ul>
				<a className={styles.ServiceHeader__tel} href="tel:89811201117">+7 (981) 120-11-17</a>
			</div>
		</div>
	)
}

export default ServiceHeader
