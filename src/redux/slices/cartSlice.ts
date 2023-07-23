import {createSlice,PayloadAction} from '@reduxjs/toolkit';

import { RootState } from '../store';

interface CartItem {
	id:number
	title:string
	price:number
	imageUrl:string
}
interface CartSliceState {
	items:CartItem[]
}
const initialState:CartSliceState = {
	items:[],
}
console.log(initialState)

export const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers: {
		addItem(state,action:PayloadAction<CartItem>) {
			state.items.push(action.payload)
			console.log(action.payload)
			console.log(state.items)
			console.log(initialState)
		},
	},
})
console.log(initialState)

export const selectCart = (state:RootState) => state.cart;

export const  {addItem} =cartSlice.actions;
export default cartSlice.reducer;