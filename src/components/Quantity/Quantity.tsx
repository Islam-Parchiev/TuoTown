import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { motion } from 'framer-motion'

import 'swiper/css'
import SliderNavigation from '../SliderNavigation/SliderNavigation'
import {MButton} from '../Button/Button'
import Button from '../Button/Button'

import styles from './Quantity.module.scss'

const slideAnimation = {
	hidden:{
      	x:-1500,
	  	// opacity:0,
	},
	visible:(custom:any)=>({
		x:0,
	  	// opacity:1,
	  	transition:{delay:custom * 0.5},
	}),
}
const Quantity: FC = () => {
	return (
		<section className={`${styles.quantity}`}>
			<Swiper
				// @ts-ignore
				modules={[Pagination, Navigation, A11y]}
				pagination={{ clickable: true }}
				className={`${styles.quantity__slider}`}>
				<SwiperSlide>
					<motion.div 
						className={`${styles.quantity__slide}`}
						initial="hidden"
						whileInView="visible"
						viewport={{amount:0.2,once:true}}>
						<div 
							className={`${styles.quantity__slide_text}`}>
							<motion.h1 
								className={`${styles.quantity__title}`}
								variants={slideAnimation}
								custom={1}>
								Исключительное качество без компромиссов1
							</motion.h1>
							<motion.div 
								className={`${styles.quantity__descr}`}
								variants={slideAnimation}
								custom={1}>
								Ножи «Tuotown» – это главный инструмент поваров и
								секрет кулинарного мастерства
							</motion.div>
						</div>
						{/* <button className={`btn-reset ${styles.quantity__btn}`}>
							ПОДРОБНЕЕ
						</button> */}
						<MButton 
							size="medium" 
							variant="secondary" 
							variants={slideAnimation}
							custom={0.4}
							type="two"
							onclick={()=> console.log('click')}
							otherClass={styles.quantity__btn}>Подронее</MButton>
					</motion.div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={`${styles.quantity__slide}`}>
						<div className={`${styles.quantity__slide_text}`}>
							<h1 className={`${styles.quantity__title}`}>
								Исключительное качество без компромиссов
							</h1>
							<div className={`${styles.quantity__descr}`}>
								Ножи «Tuotown» – это главный инструмент поваров и
								секрет кулинарного мастерства
							</div>
						</div>
						<Button 
							size="medium" 
							variant="secondary" 
							type="two"
							onclick={()=> console.log('click')}
							otherClass={styles.quantity__btn}>Подронее</Button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={`${styles.quantity__slide}`}>
						<div className={`${styles.quantity__slide_text}`}>
							<h1 className={`${styles.quantity__title}`}>
								Исключительное качество без компромиссов
							</h1>
							<div className={`${styles.quantity__descr}`}>
								Ножи «Tuotown» – это главный инструмент поваров и
								секрет кулинарного мастерства
							</div>
						</div>
						<Button 
							size="medium" 
							variant="secondary" 
							type="two"
							onclick={()=> console.log('click')}
							otherClass={styles.quantity__btn}>Подронее</Button>
					</div>
				</SwiperSlide>
				<SliderNavigation />
			</Swiper>
		</section>
	)
}

export default Quantity
