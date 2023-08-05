import React from 'react'

import Button from '../Button/Button';

import styles from './ProductQuantity.module.scss';

const ProductQuantity:React.FC = () => {
	return (
		<section className={styles.ProductQuantity}>
			<div className={`container ${styles.ProductQuantity__container}`}>
				<h1 className={styles.ProductQuantity__title}>
					Title
				</h1>
				<div className={styles.ProductQuantity__descr}>
				Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
				</div>
				<div className={styles.ProductQuantity__buy}>
					 <Button size="medium" variant="primary" type="two" onclick={()=> console.log('productClick')}>Купить</Button>
					 <span className={styles.ProductQuantity__price}>47 тыс.р.</span>
				</div>
			</div>
		</section>
	)
}

export default ProductQuantity