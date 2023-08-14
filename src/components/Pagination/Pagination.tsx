import {FC} from 'react'

import './Pagination.scss';

const Pagination:FC<any> = ({paginate,page,knives,knivesPerPage,totalKnives}) => {
	// console.log('ddddd',knives.length);
	
	const kniveNumbers = [];

	for(let i =1; i <= Math.ceil(totalKnives / knivesPerPage);i++) {
    	kniveNumbers.push(i)
	}

  	return (
		<ul className="list-reset Pagination">
			{/* <li className={page === 1 ? 'active':''} onClick={() => setPage(1)}>1</li>
			{knives.length > 5 ? 
				<>
					<li className={page === 2 ? 'active':''} onClick={() => setPage(2)}>2</li>
					<li className={page === 3 ? 'active':''} onClick={() => setPage(3)}>3</li> 
				</> : null}
		 */}
		 {
			 kniveNumbers.map(number => (
				<li className={page === number ? 'active':''} onClick={()=> paginate(number)} key={number}>{number}</li>
			))
		 }
		</ul>
  	)
}

export default Pagination