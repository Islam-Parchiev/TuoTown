import React from 'react'

import { Link } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'

import './Basket.scss';
import BasketItem from '../../components/BasketItem/BasketItem';

const Basket:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	return (
		<main className="Basket">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			<div className="container Basket__container">
				<div className="Basket__heading">
					<Link to="/catalog">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none">
							<path
								d="M2.64645 10.3536C2.45118 10.1583 2.45118 9.84171 2.64645 9.64645L5.82843 6.46447C6.02369 
						6.2692 6.34027 6.2692 6.53553 6.46447C6.73079 6.65973 6.73079 6.97631 6.53553 7.17157L3.70711 
						10L6.53553 12.8284C6.73079 13.0237 6.73079 13.3403 6.53553 13.5355C6.34027 13.7308 6.02369 13.7308 
						5.82843 13.5355L2.64645 10.3536ZM18 10.5L3 10.5V9.5L18 9.5V10.5Z"
								fill="#ADACAC"
							/>
						</svg>
						К покупкам
					</Link>
					<h1 className="Basket__title">Корзина</h1>
				</div>
				<div className="Basket__cart">
					<ul className="list-reset Basket__cart-items">
						<BasketItem/>
						<BasketItem/>
						<BasketItem/>
					</ul>
					<div className="Basket__cart-footer">
						<span>К оплате:</span>
						<div className="Basket__cart-price">
							<span>700</span>
							<div className="Basket__cart-value">
								<span>тыс.</span>
								<span>р.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Basket