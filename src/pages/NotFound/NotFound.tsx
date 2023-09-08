import {FC} from 'react'

import {Helmet} from 'react-helmet';

import { Link } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import { IToggleSidebar } from '../../types/Sidebar';

import styles from './NotFound.module.scss';

const NotFound:FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>NotFound</title>
			</Helmet>
			<main 
				className={styles.NotFound}>

				{toggleSidebar === true ? <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>:null}
				<h1 className={styles.NotFound__title}>404 ERROR</h1>
				<h2 className={styles.NotFound__subtitle}>Not Found</h2>
				<Link className={styles.NotFound__back} to="/">Перейти на главную</Link>

			</main>
		</>
	)
}

export default NotFound