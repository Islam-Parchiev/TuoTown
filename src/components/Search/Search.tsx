import React from 'react'

import styles from './Search.module.scss';

const Search:React.FC<any> = ({setSearchValue,searchValue}) => {
	
	const handleInput = (e:any) => {
		setSearchValue(e.target.value);
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