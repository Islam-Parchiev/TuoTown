import {createSlice,PayloadAction} from '@reduxjs/toolkit';

import { RootState } from '../store';

interface CartItem {
	id:number
	title:string
	price:number
	imageUrl:string
	count?:number
}
interface CartSliceState {
	items:CartItem[]
	price:number
}
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
			state.price = state.items.reduce((acc,obj) => acc+ obj.price,0);
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
				//@ts-ignore
			   findItem.price = findItem.price * findItem.count
			}
			 
		},
		onClickMinus(state,action:PayloadAction<number>) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if(findItem) {
			   //@ts-ignore
			   findItem.count--
				//@ts-ignore
			   findItem.price = findItem.price * findItem.count
			}
			 
		},
	},
})
console.log(initialState)

export const selectCart = (state:RootState) => state.cart;

export const  {addItem,removeItem,onClickPlus,onClickMinus} =cartSlice.actions;
export default cartSlice.reducer;