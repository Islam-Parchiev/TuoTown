import { CartItem } from '../types/cartItem';

export const calcTotalPrice = (items:CartItem[]) => {
	return  items.reduce((sum,obj)=> {
		//@ts-ignore
		return (obj.price * obj.count) + sum;
	},0);

}
