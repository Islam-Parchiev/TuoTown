import { FC } from 'react'

import { useAppSelector } from '../../redux/store'

import { useAppDispatch } from '../../redux/store'
import Accordion from '../Accordion/Accordion'
import { setFilter, setSort } from '../../redux/slices/filterSlice'

import styles from './Filter.module.scss'

const Filter: FC = () => {
	const { neww, sort } = useAppSelector(state => state.filterSlice)
	
	const dispatch = useAppDispatch()
	return (
		<div className={styles.Filter}>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						Новинки{' '}
						<input
							type="checkbox"
							checked={neww}
							onChange={() => dispatch(setFilter(!neww))}
						/>
					</li>
					<li className="Accordion__item">
						По цене{' '}
						<input
							type="checkbox"
							checked={sort}
							onChange={() => dispatch(setSort(!sort))}
						/>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">Складной нож</a>
					</li>
				</ul>
			</Accordion>
		</div>
	)
}

export default Filter
