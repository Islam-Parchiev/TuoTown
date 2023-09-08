import React from 'react'

import styles from './Send.module.scss'
const Send: React.FC = React.memo(() => {
	return (
		<div className={styles.Send}>
			<h2 className={`${styles.Send__title}`}>
				Узнавайте первым о новинках и новостях
			</h2>
			<form className={styles.Send__form}>
				<label className={`${styles.Send__label}`}>
					<input
						className={`input-reset ${styles.Send__input}`}
						type="text"
						placeholder="Ваш e-mail"
					/>
					<button className={`btn-reset ${styles.Send__btn}`}>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.75 13.5L11.25 9L6.75 4.5"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</label>
			</form>
		</div>
	)
})

export default Send
