import React from 'react'
import { YMaps,Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './MapContent.module.scss';


const MapContent:React.FC = () => {
	return (
		<div className={styles.MapContent}>
			<div className={styles.MapContent__left}>
				<YMaps>
       	  <Map className={styles.MapContent__map} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
					 <Placemark geometry={[55.684758, 37.738521]} />

					</Map>
	
   	 </YMaps>
			</div>
			<div className={styles.MapContent__address}>
            	<button className={`btn-reset ${styles.MapContent__btn}`}>
					Найти ближайший
				</button>
				<ul className={`list-reset ${styles.MapContent__items}`}>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>
					<li className={styles.MapContent__item}>
						<h4 className={styles.MapContent__item_title}>ТРЦ «АФИМОЛЛ Сити»</h4>
						<address>г. Москва, Пресненская набережная, д. 2, этаж 1</address>
						<span className={styles.MapContent__time}>вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00   </span>
						<a href="tel:79689990777">+7 (968) 999-07-77</a>
						<button className="btn-reset">
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="24"
								 height="24" 
								 viewBox="0 0 24 24" 
								 fill="none">
								<path d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z" fill="#828282"/>
							</svg>
							<span>Проложить маршрут</span>
						</button>
					</li>

				</ul>
			</div>
		</div>
	)
}

export default MapContent