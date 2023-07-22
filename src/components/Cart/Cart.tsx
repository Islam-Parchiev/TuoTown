import React from 'react'

import BasketItem from '../BasketItem/BasketItem'

import './Cart.scss'

const Cart: React.FC = () => {
	return (
		<div className="Cart">
			<ul className="list-reset Cart-items">
				<BasketItem />
				<BasketItem />
				<BasketItem />
			</ul>
			<div className="Cart-footer">
				<span className="Cart-footer--topay">К оплате:</span>
				<div className="Cart-price">
					<span>700</span>
					<div className="Cart-value">
						<span>тыс.</span>
						<span>р.</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
