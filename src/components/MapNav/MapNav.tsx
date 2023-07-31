import React from 'react'

import styles from './MapNav.module.scss'

const MapNav = () => {
	return (
		<div className="Map__nav">
			<label className="Map__search">
				<input type="text" className="input-reset" />
				<button className="btn-reset Map__search-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M14.9569 7.13921L17.8661 10.1639C18.0446 
								10.3495 18.0446 10.6505 17.8661 10.8361L14.9569 13.8608C14.7783 14.0464 14.4889 14.0464 
								14.3104 13.8608C14.1318 13.6752 14.1318 13.3742 14.3104 13.1886L16.4392 10.9753H2V10.0247H16.4392L14.3104 
								7.81137C14.1318 7.62576 14.1318 7.32482 14.3104 7.13921C14.4889 6.9536 14.7783 6.9536 14.9569 7.13921Z"
							fill="#ADACAC"
						/>
					</svg>
				</button>
			</label>
			<ul className="list-reset Map__categories">
				<li className="Map__categories-item">
					<img src="/img/Map/categories1.png" alt="" />
				</li>
				<li className="Map__categories-item">
					<img src="/img/Map/categories1.png" alt="" />
				</li>
				<li className="Map__categories-item">
					<img src="/img/Map/categories1.png" alt="" />
				</li>
				<li className="Map__categories-item">
					<img src="/img/Map/categories1.png" alt="" />
				</li>
				<li className="Map__categories-item">
					<img src="/img/Map/categories1.png" alt="" />
				</li>
			</ul>
		</div>
	)
}

export default MapNav
