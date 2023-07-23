import {createSlice,current,PayloadAction} from '@reduxjs/toolkit';

import { RootState } from '../store';

interface CartItem {
	id:number
	title:string
	price:number
	imageUrl:string
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
			state.items.push(action.payload)
			state.price = state.items.reduce((acc,obj) => acc+ obj.price,0);
		
		},
		removeItem(state,action:PayloadAction<number>) {
			state.items = state.items.filter(obj => obj.id !==action.payload)
			state.price = state.items.reduce((acc,obj) => acc+ obj.price,0);
		},
	},
})
console.log(initialState)

export const selectCart = (state:RootState) => state.cart;

export const  {addItem,removeItem} =cartSlice.actions;
export default cartSlice.reducer;