import styles from './Home.module.scss';

const Home = () => {
	return (
		<section className={styles.Home}>
			<div className={`container ${styles.Home__container}`}>
      	<h1 className={styles.Home__title}>Дом и Ножи</h1>
				<span className={styles.Home__subtitle}>Эксклюзивные технологии на страже чистоты и уюта в вашем доме</span>
			</div>
		</section>
	)
}

export default Home