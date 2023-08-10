import React from 'react'

import Button from '../Button/Button';

import styles from './ProductQuantity.module.scss';

const ProductQuantity:React.FC = ({productTitle,productPrice,onClickAdd}:any) => {
	return (
		<section className={styles.ProductQuantity}>
			<div className={`container ${styles.ProductQuantity__container}`}>
				<h1 className={styles.ProductQuantity__title}>
					{productTitle}
				</h1>
				<div className={styles.ProductQuantity__descr}>
				Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства
				</div>
				<div className={styles.ProductQuantity__buy}>
					 <Button size="medium" variant="primary" type="two" onclick={onClickAdd}>Купить</Button>
					 <span className={styles.ProductQuantity__price}>{productPrice}р.</span>
				</div>
			</div>
		</section>
	)
}

export default ProductQuantity