import { FC } from 'react'

import './Pagination.scss'

interface IPagination {
	paginate: (number: number) => void
	page: number
	knivesPerPage: number
	totalKnives: number
}

const Pagination: FC<IPagination> = ({ paginate, page, knivesPerPage, totalKnives }) => {
	const kniveNumbers = []

	for (let i = 1; i <= Math.ceil(totalKnives / knivesPerPage); i++) {
		kniveNumbers.push(i)
	}

	return (
		<ul className="list-reset Pagination">
			{kniveNumbers.map(number => (
				<li
					className={page === number ? 'active' : ''}
					onClick={() => paginate(number)}
					key={number}>
					{number}
				</li>
			))}
		</ul>
	)
}

export default Pagination
