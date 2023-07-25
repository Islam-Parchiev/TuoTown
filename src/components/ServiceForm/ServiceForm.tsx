import React from 'react'

import styles from './ServiceForm.module.scss';

const ServiceForm:React.FC = () => {
	return (
		<div className={styles.ServiceForm__wrapper}>
			<form className={styles.ServiceForm}>
				<div className={styles.ServiceForm__top}>
					<label className={styles.ServiceForm__input}>
						<span>Тема</span>
						<input
						 type="text" 
						 className="input-reset" 
						 placeholder="Неполадки с ножом" 
						 />
						
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Тема</span>
						<input
						 type="text" 
						 className="input-reset" 
						 placeholder="Неполадки с ножом" 
						 />
						
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Тема</span>
						<input
						 type="text" 
						 className="input-reset" 
						 placeholder="Неполадки с ножом" 
						 />
						
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Тема</span>
						<input
						 type="text" 
						 className="input-reset" 
						 placeholder="Неполадки с ножом" 
						 />
						
					</label>
				</div>
			</form>
		</div>
	)
}

export default ServiceForm