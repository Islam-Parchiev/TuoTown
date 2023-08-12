import styles from './ToTop.module.scss';

const ToTop = () => {
	const handleClickTop =() => {
		window.scrollTo(0,0);
	}
	return (
		<div onClick={handleClickTop} className={styles.toTop}>
			<div className={styles.toTop__img}>
				<img src="/img/arrow.png" alt="" />
			</div>
		</div>
	)
}

export default ToTop