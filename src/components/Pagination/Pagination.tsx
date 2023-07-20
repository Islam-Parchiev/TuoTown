import React,{FC} from 'react'

import './Pagination.scss';

const Pagination:FC<any> = ({setPage,page}) => {
	
  	return (
		<ul className="list-reset Pagination">
			<li className={page === 1 ? 'active':''} onClick={() => setPage(1)}>1</li>
			<li className={page === 2 ? 'active':''} onClick={() => setPage(2)}>2</li>
		</ul>
  	)
}

export default Pagination