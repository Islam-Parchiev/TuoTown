import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import { ICard } from '../../types/Card'

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
interface IfetchCatalogItems {
	check: string
	search: string
	sortByPrice: string
}

export const fetchCatalogItems = createAsyncThunk(
	'users/fetchCatalogItems',
	async ({ check, search, sortByPrice }: IfetchCatalogItems) => {
		// eslint-disable-next-line max-len
		const { data } = await axios.get<ICard[]>(
			`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items?limit=6${sortByPrice}${search}${check}`,
		)
		return data
	},
)

interface UsersState {
	knives: ICard[]
	status: Status.LOADING | Status.SUCCESS | Status.ERROR
}

const initialState = {
	knives: [],
	status: Status.LOADING,
} as UsersState

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setKnives(state, action) {
			state.knives = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCatalogItems.pending, state => {
			state.knives = []
			state.status = Status.LOADING
			
		})

		builder.addCase(fetchCatalogItems.fulfilled, (state, action) => {
			//  @ts-ignore
			state.knives = action.payload
			state.status = Status.SUCCESS
			
		})
		builder.addCase(fetchCatalogItems.rejected, state => {
			state.knives = []
			state.status = Status.ERROR
		
		})
	},
})

export const { setKnives } = catalogSlice.actions
export default catalogSlice.reducer
