/* eslint-disable max-len */
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';



export const fetchCatalogItems = createAsyncThunk(
  	'users/fetchCatalogItems',
  	async ({page,checked,check,searchValue,search}:any) => {
			
    	const {data} = await axios.get(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items?page=${page}&limit=6${checked===true ? check :''}${searchValue.length > 0 ? search :''}`)
    	return data
  	},
)
interface UsersState {
  knives: []
  status: 'pending' | 'succeeded' | 'failed'
}



const initialState = {
	knives:[],
	status:'pending',
} as UsersState

export const catalogSlice = createSlice({
	name:'catalog',
	initialState,
	reducers: {
		setKnives(state,action) {
			state.knives = action.payload
		},

	},
	extraReducers: (builder) => {
   	 // Add reducers for additional action types here, and handle loading state as needed
    	builder.addCase(fetchCatalogItems.fulfilled, (state, action) => {
     	 // Add user to the state array
			//  @ts-ignore
    	  state.knives=action.payload
				console.log('dddddaaaaadddddaaa',state.knives)
   	 })
	  },

})


export const  {setKnives} =catalogSlice.actions;
export default catalogSlice.reducer;