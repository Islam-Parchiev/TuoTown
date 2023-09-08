import { createSlice } from '@reduxjs/toolkit'

export interface IFilter {
	neww: boolean
	sort: boolean
	searchValue: string
	page: number
}

const initialState: IFilter = {
	neww: false,
	sort: false,
	searchValue: '',
	page: 1,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		
		setFilter(state, action) {
			state.neww = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
		setFilters(state, action) {
			state.page = Number(action.payload.page)
			state.sort = action.payload.sort === 'true' ? true : false
			state.searchValue = action.payload.search
			state.neww = action.payload.new === 'true' ? true : false
			
		},
	},
})

export const { setFilter, setPage, setSearchValue, setSort, setFilters } =
	filterSlice.actions
export default filterSlice.reducer
