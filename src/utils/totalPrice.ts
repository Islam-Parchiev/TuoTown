import { CartItem } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items:CartItem[]) => {
	return  items.reduce((sum,obj)=> {
		//@ts-ignore
		return (obj.price * obj.count) + sum;
	},0);

}
