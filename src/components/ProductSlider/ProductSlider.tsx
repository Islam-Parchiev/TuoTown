import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Pagination } from 'swiper/modules'




import styles from './ProductSlider.module.scss';


const ProductSlider:React.FC = () => {
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
			 {/* <Swiper
			//  @ts-ignore
       	 spaceBetween={30}
       	 pagination={{
       	   clickable: true,
        	}}
       	 modules={[Pagination]}
      	  className="mySwiper"
      	>
     	   <SwiperSlide>Slide 1</SwiperSlide>
      	  <SwiperSlide>Slide 2</SwiperSlide>
      	  <SwiperSlide>Slide 3</SwiperSlide>
     	   <SwiperSlide>Slide 4</SwiperSlide>
     	   <SwiperSlide>Slide 5</SwiperSlide>
     	   <SwiperSlide>Slide 6</SwiperSlide>
      	  <SwiperSlide>Slide 7</SwiperSlide>
      	  <SwiperSlide>Slide 8</SwiperSlide>
      	  <SwiperSlide>Slide 9</SwiperSlide>
    	  </Swiper> */}
		</section>
	)
}

export default ProductSlider