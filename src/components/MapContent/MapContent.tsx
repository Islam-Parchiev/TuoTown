import React from 'react'
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps'

import styles from './MapContent.module.scss'

const mapState = { center: [55.630527, 37.849046], zoom: 10, controls: [] }
const cities = [
	{
		id: 1,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-77',
		},
		options: { selectOnClick: false },
		coords: [55.749162, 37.539742],
	},
	{
		id: 2,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»2',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-79',
		},
		options: { selectOnClick: false },
		coords: [55.735657, 37.562228],
	},
	{
		id: 3,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»3',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-78',
		},
		options: { selectOnClick: false },
		coords: [55.749162, 38.559742],
	},
	{
		id: 1,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-77',
		},
		options: { selectOnClick: false },
		coords: [55.749162, 37.539742],
	},
	{
		id: 2,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»2',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-79',
		},
		options: { selectOnClick: false },
		coords: [55.735657, 37.562228],
	},
	{
		id: 3,
		data: {
			title: 'ТРЦ «АФИМОЛЛ Сити»3',
			address: 'г. Москва, Пресненская набережная, д. 2, этаж 1',
			schedule: 'вск-чт с 10:00 до 22:00. пт-сб с 10:00 до 23:00',
			phoneNumber: '+7 (968) 999-07-78',
		},
		options: { selectOnClick: false },
		coords: [55.749162, 38.559742],
	},
]
const getPointData = (index: number) => {
	return {
		balloonContentBody: 'placemark <strong>balloon ' + { index } + '</strong>',
		clusterCaption: 'placemark <strong>' + { index } + '</strong>',
	}
}

const getPointOptions = () => {
	return {
		preset: 'islands#violetIcon',
	}
}

const MapContent: React.FC = () => {
	const [coord, setCoord] = React.useState<{ center: number[] }>()

	const onItemClick = (coords: number[]) => {
		setCoord({ center: coords })
	}
	return (
		<div className={styles.MapContent}>
			<div className={styles.MapContent__left}>
				<YMaps>
					<Map
						className={styles.MapContent__map}
						state={coord}
						defaultState={mapState}>
						<Clusterer
							options={{
								preset: 'islands#invertedVioletClusterIcons',
								groupByCoordinates: false,
								clusterDisableClickZoom: true,
								clusterHideIconOnBalloonOpen: false,
								geoObjectHideIconOnBalloonOpen: false,
							}}>
							{cities.map(items => (
								<Placemark
									key={items.id}
									geometry={items.coords}
									properties={getPointData(items.id)}
									options={getPointOptions()}
								/>
							))}
						</Clusterer>
					</Map>
				</YMaps>
			</div>
			<div className={styles.MapContent__address}>
				<button className={`btn-reset ${styles.MapContent__btn}`}>
					Найти ближайший
				</button>
				<ul className={`list-reset ${styles.MapContent__items}`}>
					{cities.map(city => (
						<li className={styles.MapContent__item}>
							<h4 className={styles.MapContent__item_title}>
								{city.data.title}
							</h4>
							<address>{city.data.address}</address>
							<span className={styles.MapContent__time}>
								{city.data.schedule}
							</span>
							<a
								href={`tel:${city.data.phoneNumber.replace(
									/[^0-9]/g,
									'',
								)}`}>
								{city.data.phoneNumber}
							</a>
							<button className="btn-reset">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none">
									<path
										d="M4 20H5.14286V9.61539H17.9086L15.4286 11.9231V13.0769L20 9.03846L15.4286 5V6.15385L17.9086 8.46154H4V20Z"
										fill="#828282"
									/>
								</svg>
								<span onClick={() => onItemClick(city.coords)}>
									Проложить маршрут
								</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MapContent
