import {FC} from 'react'

import Accordion from '../Accordion/Accordion';

import styles from './Filter.module.scss';


const Filter:FC = () => {
	return (
		<div className={styles.Filter}>
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