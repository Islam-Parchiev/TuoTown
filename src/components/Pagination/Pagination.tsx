import React,{FC} from 'react'

import './Pagination.scss';

const Pagination:FC<any> = ({setPage,page,knives}) => {
	console.log('ddddd',knives.length);
	
  	return (
		<ul className="list-reset Pagination">
			<li className={page === 1 ? 'active':''} onClick={() => setPage(1)}>1</li>
			{knives.length > 5 ? 
				<>
					<li className={page === 2 ? 'active':''} onClick={() => setPage(2)}>2</li>
					<li className={page === 3 ? 'active':''} onClick={() => setPage(3)}>3</li> 
				</> : null}
		
		</ul>
  	)
}

export default Pagination