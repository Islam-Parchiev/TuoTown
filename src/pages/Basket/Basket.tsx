import React from 'react'

import { Link } from 'react-router-dom'

import Form from '../../components/Form/Form'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Basket.scss'
import BasketItem from '../../components/BasketItem/BasketItem'

const Basket: React.FC<any> = ({ toggleSidebar, setToggleSidebar }) => {
	return (
		<main className="Basket">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			<div className="container Basket__container">
				<div className="Basket__wrapper">
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
							<BasketItem />
							<BasketItem />
							<BasketItem />
						</ul>
						<div className="Basket__cart-footer">
							<span className="Basket__cart-footer--topay">
								К оплате:
							</span>
							<div className="Basket__cart-price">
								<span>700</span>
								<div className="Basket__cart-value">
									<span>тыс.</span>
									<span>р.</span>
								</div>
							</div>
						</div>
					</div>
					<ul className="list-reset Basket__services">
						<li className="Basket__services-item services__item">
							<div className="services__item-img">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none">
									<path
										d="M30 15.2727C30 24.8182 18 33 18 33C18 33 6 24.8182 6 15.2727C6 12.0178 
								7.26428 8.89618 9.51472 6.5946C11.7652 4.29302 14.8174 3 18 3C21.1826 3 24.2348
								 4.29302 26.4853 6.5946C28.7357 8.89618 30 12.0178 30 15.2727Z"
										stroke="white"
										stroke-width="1.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18 19.3636C20.2091 19.3636 22 17.5321 22 15.2727C22 13.0134 20.2091 
								11.1818 18 11.1818C15.7909 11.1818 14 13.0134 14 15.2727C14 17.5321 15.7909 
								19.3636 18 19.3636Z"
										stroke="white"
										stroke-width="1.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div className="services__item-text">
								<h4>Доставка</h4>
								<span>Саратов, 25.10 бесплатно</span>
							</div>
						</li>
						<li className="Basket__services-item services__item">
							<div className="services__item-img">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none">
									<path
										d="M30 15.2727C30 24.8182 18 33 18 33C18 33 6 24.8182 6 15.2727C6 12.0178 
								7.26428 8.89618 9.51472 6.5946C11.7652 4.29302 14.8174 3 18 3C21.1826 3 24.2348
								 4.29302 26.4853 6.5946C28.7357 8.89618 30 12.0178 30 15.2727Z"
										stroke="white"
										stroke-width="1.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18 19.3636C20.2091 19.3636 22 17.5321 22 15.2727C22 13.0134 20.2091 
								11.1818 18 11.1818C15.7909 11.1818 14 13.0134 14 15.2727C14 17.5321 15.7909 
								19.3636 18 19.3636Z"
										stroke="white"
										stroke-width="1.3"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div className="services__item-text">
								<h4>Доставка</h4>
								<span>Саратов, 25.10 бесплатно</span>
							</div>
						</li>
					</ul>
					<div className="Basket__form">
						<h2 className="Basket__form-title">
							Для подтверждения заказа - введите ваши данные и мы
							перезвоним вам
						</h2>
						<div className="Basket__form-wrapper">
							<form action="/" className="Basket__form-form">
								<div className="Basket__form-inputs">
									<label className="Basket__form-label">
										<span>Получатель</span>
										<input
											className="input-reset"
											type="text"
											placeholder="Имя Фамилия"
										/>
									</label>
									<label className="Basket__form-label">
										<span>Мобильный телефон</span>
										<input
											className="input-reset"
											type="text"
											placeholder="+7 (___) ___-__-__"
										/>
									</label>
									<label className="Basket__form-label">
										<span>E-mail</span>
										<input
											className="input-reset"
											type="text"
											placeholder="Ваша почта"
										/>
									</label>
								</div>
								<div className="Basket__form-info">
									<p>
										Нажимая «Выбрать способ доставки»,
										подтверждаю, что я ознакомлен с
										условиями{' '}
										<a href="/">
											Публичного договора оферты и
											Политикой конфиденциальности
										</a>
										, а также согласен получать
										информационную рассылку
									</p>
									<button
										className="btn-reset Basket__form-btn"
										type="submit">
										Отправить форму
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</main>
	)
}

export default Basket
