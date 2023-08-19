import React from 'react'

import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';
const Search:React.FC<any> = () => {
	const {searchValue} = useSelector((state:any)=> state.filterSlice)
	const dispatch = useAppDispatch()
	const handleInput = (e:any) => {
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