import { FC } from 'react'

import styles from './Specifications.module.scss'

const Specifications: FC = () => {
	return (
		<section className={styles.Specifications}>
			<div className={`container ${styles.Specifications__container}`}>
				<div className={styles.Specifications__img}>
					<img src="/img/product/spec1.jpg" alt="" />
				</div>
				<div className={styles.Specifications__info}>
					<h3>Характеристики</h3>
					<ul className={`list-reset ${styles.Specifications__info_list}`}>
						<li className={styles.Specifications__info_item}>
							<span>Длина лезвия</span>
							<span>24см</span>
						</li>
						<li className={styles.Specifications__info_item}>
							<span>Длина лезвия</span>
							<span>24см</span>
						</li>
						<li className={styles.Specifications__info_item}>
							<span>Длина лезвия</span>
							<span>24см</span>
						</li>
					</ul>
					<button
						className={`btn-reset ${styles.Specifications__more_btn}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.4979 4.5C12.4979 4.22386 12.274 4 
								11.9979 4C11.7218 4 11.4979 4.22386 11.4979 4.5V11.4979H4.5C4.22386 11.4979 4 11.7218 
								4 11.9979C4 12.2741 4.22386 12.4979 4.5 12.4979H11.4979V19.4958C11.4979 19.772 11.7218 
								19.9958 11.9979 19.9958C12.274 19.9958 12.4979 19.772 12.4979 19.4958V12.4979H19.4958C19.772 
								12.4979 19.9958 12.2741 19.9958 11.9979C19.9958 11.7218 19.772 11.4979 19.4958 
								11.4979H12.4979V4.5Z"
								fill="#ADACAC"
							/>
						</svg>
						больше характеристик
					</button>
				</div>
			</div>
		</section>
	)
}

export default Specifications
