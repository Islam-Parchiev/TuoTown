import { motion } from 'framer-motion'

import styles from './ToTop.module.scss';

const toTopAnimation = {
	hidden:{
      	scale:0,
	},
	visible:(custom:any)=>({
		scale:1,
	  	transition:{delay:custom * 0.5},
	}),
}
const ToTop = () => {
	const handleClickTop =() => {
		window.scrollTo(0,0);
	}
	return (
		<motion.div 
			onClick={handleClickTop} 
			className={styles.toTop}
			initial="hidden"
			whileInView="visible"
			variants={toTopAnimation}
			custom={2}>
			<div className={styles.toTop__img}>
				<img src="/img/arrow.png" alt="" />
			</div>
		</motion.div>
	)
}

export default ToTop