import { calcTotalPrice } from './totalPrice';

export const getCartFromLS=() => {
	const data =localStorage.getItem('cartItems');
	const items = data ? JSON.parse(data) : [];
	const totalPrice = calcTotalPrice(items)
	
	return {
		items,
		totalPrice,
	} 
	
}