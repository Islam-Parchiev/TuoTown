import { createSlice } from '@reduxjs/toolkit';

export interface IFilter {

	
	neww:boolean;
}

const initialState:IFilter = {
	neww:false,
}

export const filterSlice = createSlice({
	name:'filter',
	initialState,
	reducers: {
		// console.log('filterrrrrrrr',knives.filter((value:any) => value.new === true))
	      setFilter(state,action) {
        	state.neww = action.payload.neww
        	
		},
	},
})


export const  {setFilter} =filterSlice.actions;
export default filterSlice.reducer;