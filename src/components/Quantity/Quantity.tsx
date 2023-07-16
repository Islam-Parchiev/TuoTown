import React, { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import SliderNavigation from '../SliderNavigation/SliderNavigation'

import styles from './Quantity.module.scss'

const Quantity: FC = () => {
	return (
		<section className={`${styles.quantity}`}>
			<Swiper
				// @ts-ignore
				modules={[Pagination, Navigation, A11y]}
				pagination={{ clickable: true }}
				className="quantity__slider">
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
						<button className={`btn-reset ${styles.quantity__btn}`}>
							ПОДРОБНЕЕ
						</button>
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
						<button className={`btn-reset ${styles.quantity__btn}`}>
							ПОДРОБНЕЕ
						</button>
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
						<button className={`btn-reset ${styles.quantity__btn}`}>
							ПОДРОБНЕЕ
						</button>
					</div>
				</SwiperSlide>
				<SliderNavigation />
			</Swiper>
		</section>
	)
}

export default Quantity
