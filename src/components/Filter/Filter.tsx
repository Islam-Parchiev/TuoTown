import {FC} from 'react'

import Accordion from '../Accordion/Accordion';

import styles from './Filter.module.scss';


const Filter:FC = () => {
	return (
		<div className={styles.Filter}>
			<Accordion/>
			<Accordion/>
			<Accordion/>
			<Accordion/>
		</div>
	)
}

export default Filter