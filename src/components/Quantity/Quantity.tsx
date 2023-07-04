import React,{FC} from 'react'
import styles from "./Quantity.module.scss";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
const Quantity:FC = () => {
  return (
    <section className={`${styles.quantity}`}>
        <div className={`container ${styles.quantity__container}`}>
      <Swiper>
        <SwiperSlide>1111111</SwiperSlide>
        <SwiperSlide>2222222</SwiperSlide>
        <SwiperSlide>3333333</SwiperSlide>
      </Swiper>
      
        </div>
    </section>
  )
}

export default Quantity