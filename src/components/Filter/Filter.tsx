import {FC} from 'react'
import { useSelector } from 'react-redux';


import { useAppDispatch } from '../../redux/store';
import Accordion from '../Accordion/Accordion';
import { setFilter } from '../../redux/slices/filterSlice';

import styles from './Filter.module.scss';


const Filter:FC<any> = ({setChecked,checked}) => {
    // @eslint-ignore
	const { neww } =useSelector((state:any)=> state.filterSlice);

	const dispatch = useAppDispatch();
	return (
		<div className={styles.Filter}>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						Новинки <input type="checkbox" value={neww} onChange={()=> dispatch(setFilter({neww:!neww}))} />
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					
				</ul>
		
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					
				</ul>
			</Accordion>
			<Accordion title="Новинки">
				<ul className="list-reset Accordion__items">
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					<li className="Accordion__item">
						<a href="/">
						Складной нож
						</a>
					</li>
					
				</ul>
			</Accordion>
		</div>
	)
}

export default Filter