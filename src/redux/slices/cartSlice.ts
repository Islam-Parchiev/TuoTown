import {createSlice,PayloadAction} from '@reduxjs/toolkit';

import { RootState } from '../store';

import { calcTotalPrice } from '../../utils/totalPrice';

import { CartItem,CartSliceState } from '../../types/cartItem';

const initialState:CartSliceState = {
	items:[],
	price:0,
}
console.log(initialState)

export const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers: {
		addItem(state,action:PayloadAction<CartItem>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

    	 if(findItem) {
			//@ts-ignore
     	   findItem.count++
     	}else {
				state.items.push({
					...action.payload,
					count:1,
				})
			}

			state.price = calcTotalPrice(state.items);
			console.log(action.payload)
		},
		removeItem(state,action:PayloadAction<number>) {
			state.items = state.items.filter(obj => obj.id !==action.payload)
			state.price = state.items.reduce((acc,obj) => acc+ obj.price,0);
		},
		onClickPlus(state,action:PayloadAction<number>) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if(findItem) {
			   //@ts-ignore
			   findItem.count++
			
			}
			state.price = calcTotalPrice(state.items);
		},
		onClickMinus(state,action:PayloadAction<any>) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if(findItem) {
			   //@ts-ignore
			   findItem.count--
			
			}
			state.price = calcTotalPrice(state.items);
		},
	},
})
console.log(initialState)

export const selectCart = (state:RootState) => state.cart;

export const  {addItem,removeItem,onClickPlus,onClickMinus} =cartSlice.actions;
export default cartSlice.reducer;