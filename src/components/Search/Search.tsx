import React from 'react'

import { useAppSelector } from '../../redux/store';

import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';
const Search:React.FC = () => {
	const {searchValue} = useAppSelector((state)=> state.filterSlice)
	const dispatch = useAppDispatch()
	const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(e.target.value));
	}
	return (
		<label className={styles.Search}>
			<input 
			 className="input-reset"
			 type="text" 
			 value={searchValue} 
			 onChange={(e)=> handleInput(e)}
			 placeholder="Search..."/>
			
		</label>
	)
}

export default Search