import React, { FC } from 'react'

import InterestingItem from '../InterestingItem/InterestingItem'

import './Interesting.scss'

const Interesting: FC = () => {
	return (
		<section className="Interesting">
			<div className="container Interesting__container">
				<h2 className="Interesting__title">Всё самое интересное о ножах</h2>
				<ul className="list-reset Interesting__items">
					<InterestingItem />
					<InterestingItem />
					<InterestingItem />
				</ul>
			</div>
		</section>
	)
}

export default Interesting
