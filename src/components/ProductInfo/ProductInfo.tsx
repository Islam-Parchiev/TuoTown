import React from 'react'

import styles from './ProductInfo.module.scss';

const ProductInfo:React.FC = () => {
	return (
		<section className={styles.ProductInfo}>
			<div className={`container ${styles.ProductInfo__container}`}>
        	<ul className={`list-reset ${styles.ProductInfo__list}`}>
           
					 <li className={`${styles.ProductInfo__list_item} ${styles.product__item}`}>
						   <div className={styles.product__item_img}>
								   <img src="/img/Product/1.jpg" alt="" />
							 </div>
							 <div className={styles.product__item_text}>
							<div className={styles.product__item_descr}>
								<h4 className={styles.product__item_title}>
									Исключительное качество без компромиссов
								</h4>
								<span className={styles.product__item_subtitle}>
							Ножи «Tuotown» — это главный инструмент поваров и секрет кулинарного мастерства
								</span>
							</div>
							 </div>
					 </li>
	         <li className={`${styles.ProductInfo__list_item} ${styles.product__item}`}>
						   <div className={styles.product__item_img}>
								   <img src="/img/Product/1.jpg" alt="" />
							 </div>
							 <div className={styles.product__item_text}>
							<div className={styles.product__item_descr}>
								<h4 className={styles.product__item_title}>
									Исключительное качество без компромиссов
								</h4>
								<span className={styles.product__item_subtitle}>
							Ножи «Tuotown» — это главный инструмент поваров и секрет кулинарного мастерства
								</span>
							</div>
							 </div>
					 </li>
					 
					 
	        
				</ul>

			</div>
		</section>
	)
}

export default ProductInfo