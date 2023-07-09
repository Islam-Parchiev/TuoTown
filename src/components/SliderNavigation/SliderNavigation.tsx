import React,{FC} from 'react'
import {useSwiper} from 'swiper/react';
import './SliderNavigation.scss';

const SliderNavigation:FC= () => {
	const swiper = useSwiper();


	return (
		<div className="SliderNavigation">
			<button onClick={()=> swiper.slidePrev()} className="btn-reset slider-prev">
				<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 
					7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 
					4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 
					0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H16V3.5H1V4.5Z" fill="white"/>
				</svg>

			</button>
			<button onClick={()=> swiper.slideNext()} className="btn-reset slider-next">
				<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 
					0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 
					11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 
					11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 
					7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="white"/>
				</svg>

			</button>
		</div>
	)
}

export default SliderNavigation