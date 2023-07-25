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
						 className={`input-reset ${styles.focus}`} 
						 placeholder="Неполадки с ножом" 
						 />
						<span className={styles.focusBorder}></span>
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Email</span>
						<input
						 type="email" 
						 className={`input-reset ${styles.focus}`} 
						 placeholder="Ваша почта" 
						 />
						<span className={styles.focusBorder}></span>
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Имя</span>
						<input
						 type="text" 
						 className={`input-reset ${styles.focus}`} 
						 placeholder="Алексей" 
						 />
						<span className={styles.focusBorder}></span>
					</label>
					<label className={styles.ServiceForm__input}>
						<span>Телефон</span>
						<input
						 type="phone" 
						 className={`input-reset ${styles.focus}`} 
						 placeholder="+7 (___) ___-__-__" 
						 />
						<span className={styles.focusBorder}></span>
					</label>
				</div>
				<div className={styles.ServiceForm__bottom}>
					<span>Комментарий</span>
					<div className={styles.ServiceForm__textarea}>
						<textarea className={`input-reset ${styles.focuss}`} placeholder="Впишите ваше сообщение">
                        
						</textarea>
						<span className={styles.focusBorder}>
            	<i></i>
            			</span>
					</div>
				</div>
				<button className={`btn-reset ${styles.ServiceForm__btn}`}>
					Отправить
				</button>
			</form>
		</div>
	)
}

export default ServiceForm