import React from 'react'


import { useSelector } from 'react-redux'

import { selectCart } from '../../redux/slices/cartSlice'

import BasketItem from '../BasketItem/BasketItem'

import './Cart.scss'

const Cart: React.FC = () => {
	const {items,price} = useSelector(selectCart)
	console.log(items)
	return (
		<div className="Cart">
			<ul className="list-reset Cart-items">
				{items.map(item => (
					<BasketItem 
						id={item.id} 
						imageUrl={item.imageUrl} 
						price={item.price} 
						title={item.title}
						count={item.count}/>
				))}
			
			</ul>
			<div className="Cart-footer">
				<span className="Cart-footer--topay">К оплате:</span>
				<div className="Cart-price">
					
				
					<span>{price}</span>
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
