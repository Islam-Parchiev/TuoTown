import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper/modules'

import styles from './ProductSlider.module.scss'

const ProductSlider: React.FC = () => {
	return (
		<section className={styles.ProductSlider}>
			<Swiper
				// @ts-ignore
				slidesPerView={2}
				spaceBetween={90}
				// @ts-ignore
				modules={[A11y]}
				className={styles.ProductCarousel}>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/img/Product/slide.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default ProductSlider
