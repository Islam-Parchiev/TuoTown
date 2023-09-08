import React from 'react'

import { useAppDispatch } from '../../redux/store'
import { removeItem, onClickPlus, onClickMinus } from '../../redux/slices/cartSlice'
import { CartItem } from '../../types/cartItem'

import styles from './BasketItem.module.scss'

const BasketItem: React.FC<CartItem> = ({ id, price, title, imageUrl, count }) => {
	const dispatch = useAppDispatch()

	const deleteItem = (id: number) => {
		dispatch(removeItem(id))
	}
	const trueCount = count ? count : 0
	return (
		<li className={styles.BasketItem}>
			<div className={styles.BasketItem__left}>
				<div className={styles.BasketItem__img}>
					<img src={imageUrl} alt="" />
				</div>
				<h3 className={styles.BasketItem__title}>{title}</h3>
			</div>
			<div className={styles.BasketItem__right}>
				<div className={styles.BasketItem__count}>
					<div className={styles.BasketItem__count_input}>{count}</div>
					<div className={styles.BasketItem__btns}>
						<button
							onClick={() => dispatch(onClickPlus(id))}
							className={`btn-reset ${styles.BasketItem__count_plus}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.6947 5.39507L7.49468 9.59508C7.22098 
								9.86878 6.77858 9.86878 6.50488 9.59508L2.30488 5.39507C2.03118 5.12137 2.03118 4.67897 
								2.30488 4.40527C2.57858 4.13157 3.02098 4.13157 3.29468 4.40527L6.99978 8.11037L10.7049 
								4.40527C10.9786 4.13157 11.421 4.13157 11.6947 4.40527C11.8312 4.54177 11.8998 4.72097 
								11.8998 4.90017C11.8998 5.07937 11.8312 5.25857 11.6947 5.39507Z"
									fill="#828282"
								/>
							</svg>
						</button>

						<button
							disabled={trueCount <= 1 ? true : false}
							onClick={() => dispatch(onClickMinus(id))}
							className={`btn-reset ${styles.BasketItem__count_minus}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.6947 5.39507L7.49468 9.59508C7.22098 
								9.86878 6.77858 9.86878 6.50488 9.59508L2.30488 5.39507C2.03118 5.12137 2.03118 4.67897 
								2.30488 4.40527C2.57858 4.13157 3.02098 4.13157 3.29468 4.40527L6.99978 8.11037L10.7049 
								4.40527C10.9786 4.13157 11.421 4.13157 11.6947 4.40527C11.8312 4.54177 11.8998 4.72097 
								11.8998 4.90017C11.8998 5.07937 11.8312 5.25857 11.6947 5.39507Z"
									fill="#828282"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.BasketItem__price}>
					<span>{price * trueCount}</span>
					<div className={styles.BasketItem__value}>
						<span>тыс.</span>
						<span>р.</span>
					</div>
				</div>
				<button
					onClick={() => deleteItem(id)}
					className={`btn-reset ${styles.BasketItem__remove}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.33833 2.55929C3.12376 2.34682 2.77588
						 2.34682 2.56131 2.55929C2.34675 2.77176 2.34675 3.11624 2.56131 3.32872L7.27873 
						 8.00007L2.56143 12.6713C2.34687 12.8838 2.34687 13.2283 2.56143 13.4407C2.776 13.6532
						 3.12388 13.6532 3.33844 13.4407L8.05575 8.7695L12.6625 13.3312C12.877 13.5437 13.2249
						  13.5437 13.4395 13.3312C13.654 13.1188 13.654 12.7743 13.4395 12.5618L8.83276 8.00007L13.4396 
							3.43823C13.6542 3.22576 13.6542 2.88127 13.4396 2.6688C13.225 2.45633 12.8771 2.45633 12.6626 
							2.6688L8.05575 7.23065L3.33833 2.55929Z"
							fill="#828282"
						/>
					</svg>
				</button>
			</div>
		</li>
	)
}

export default BasketItem
