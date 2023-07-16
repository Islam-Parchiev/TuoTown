import React, { FC } from 'react'
import './InterestingItem.scss'

const InterestingItem: FC = () => {
	return (
		<li className="InterestingItem">
			<div className="InterestingItem__top">
				<time dateTime="2021-08-04T19:24:00">4 августа 2021 19:24</time>
			</div>

			<div className="InterestingItem__bottom">
				<h3 className="InterestingItem__title">
					Традиционные виды японских кухонных ножей
				</h3>
			</div>
		</li>
	)
}

export default InterestingItem
