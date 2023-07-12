import React,{FC} from 'react'

import './Footer.scss'

const Footer:FC = () => {
	return (
		<footer className="Footer">
			<div className="Footer__top">
				<div className="container Footer__top-container">
					<div className="Footer__column Footer__column--first">
						<div className="Footer__logo">
							<img src="/img/header/logo.png" alt="" />
							<span>легендарные ножи, создающие шедевры</span>
						</div>
						<div className="Footer__descr">
							<p>
								Компания «Tuotown» – эксклюзивный представитель
								профессиональных кухонных ножей, изготовленных
								лучшими мастерами Восточной Азии с применением
								передового европейского оборудования и современных
								материалов.
							</p>
							<p>
								Они отличаются идеальным балансом и фантастической
								остротой. Сочетают в себе вековые традиции
								и новейшие разработки. Также предлагаем широкий
								ассортимент сопутствующих товаров.
							</p>
						</div>
					</div>
					<div className="Footer__column Footer__column--second">
						<div className="Footer__row">
							<h4>Информация</h4>
							<ul className="list-reset">
								<li>
									<a href="/">Главная</a>
								</li>
								<li>
									<a href="/">Новости</a>
								</li>
								<li>
									<a href="/">О компании</a>
								</li>
								<li>
									<a href="/">Контакты</a>
								</li>
							</ul>
						</div>
						<div className="Footer__row">
							<h4>Информация</h4>
							<ul className="list-reset">
								<li>
									<a href="/">Главная</a>
								</li>
								<li>
									<a href="/">Новости</a>
								</li>
								<li>
									<a href="/">О компании</a>
								</li>
								<li>
									<a href="/">Контакты</a>
								</li>
							</ul>
						</div>
						<div className="Footer__social">
							<span>Мы в соцсетях</span>
							<ul className="list-reset Footer__social-list">
								<li className="Footer__social-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none">
										<path
											d="M13.7422 2.83688C13.7422 1.6626 12.7061 0.626465 
											11.5318 0.626465H2.62106C1.44678 0.626465 0.410645 
											1.6626 0.410645 2.83688V11.7476C0.410645 12.9219 
											1.44678 13.958 2.62106 
											13.958H7.11097V8.91553H5.45316V6.70511H7.11097V5.80713C7.11097 
											4.28747 8.21618 2.97503 9.59769 
											2.97503H11.3937V5.18544H9.59769C9.39047 5.18544 
											9.18324 5.39268 9.18324 5.80713V6.70511H11.3937V8.91553H9.18324V13.958H11.5318C12.7061 
											13.958 13.7422 12.9219 13.7422 11.7476V2.83688Z"
											
										/>
									</svg>
								</li>
								<li className="Footer__social-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none">
										<path
											d="M13.7422 2.83688C13.7422 1.6626 12.7061 0.626465 
											11.5318 0.626465H2.62106C1.44678 0.626465 0.410645 
											1.6626 0.410645 2.83688V11.7476C0.410645 12.9219 
											1.44678 13.958 2.62106 
											13.958H7.11097V8.91553H5.45316V6.70511H7.11097V5.80713C7.11097 
											4.28747 8.21618 2.97503 9.59769 
											2.97503H11.3937V5.18544H9.59769C9.39047 5.18544 
											9.18324 5.39268 9.18324 5.80713V6.70511H11.3937V8.91553H9.18324V13.958H11.5318C12.7061 
											13.958 13.7422 12.9219 13.7422 11.7476V2.83688Z"
											
										/>
									</svg>
								</li>
								<li className="Footer__social-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none">
										<path
											d="M13.7422 2.83688C13.7422 1.6626 12.7061 0.626465 
											11.5318 0.626465H2.62106C1.44678 0.626465 0.410645 
											1.6626 0.410645 2.83688V11.7476C0.410645 12.9219 
											1.44678 13.958 2.62106 
											13.958H7.11097V8.91553H5.45316V6.70511H7.11097V5.80713C7.11097 
											4.28747 8.21618 2.97503 9.59769 
											2.97503H11.3937V5.18544H9.59769C9.39047 5.18544 
											9.18324 5.39268 9.18324 5.80713V6.70511H11.3937V8.91553H9.18324V13.958H11.5318C12.7061 
											13.958 13.7422 12.9219 13.7422 11.7476V2.83688Z"
											
										/>
									</svg>
								</li>
								<li className="Footer__social-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none">
										<path
											d="M13.7422 2.83688C13.7422 1.6626 12.7061 0.626465 
											11.5318 0.626465H2.62106C1.44678 0.626465 0.410645 
											1.6626 0.410645 2.83688V11.7476C0.410645 12.9219 
											1.44678 13.958 2.62106 
											13.958H7.11097V8.91553H5.45316V6.70511H7.11097V5.80713C7.11097 
											4.28747 8.21618 2.97503 9.59769 
											2.97503H11.3937V5.18544H9.59769C9.39047 5.18544 
											9.18324 5.39268 9.18324 5.80713V6.70511H11.3937V8.91553H9.18324V13.958H11.5318C12.7061 
											13.958 13.7422 12.9219 13.7422 11.7476V2.83688Z"
											
										/>
									</svg>
								</li>
							</ul>
						</div>
					</div>
					<div className="Footer__column Footer__column--third">
						<h4>Контактная информация</h4>
						<a className="Footer__link-phone" href="tel:79811201117">+7 (981) 120-11-17</a>
						<a className="Footer__link-email" href="mailto:tuotown@mail.ru">tuotown@mail.ru</a>
						<span>08:00 — 18:00, ежедневно</span>
						<address>Россия, Москва, МКАД, 19-й километр,
вл20с1, вход Ф, 22-68-70</address>
					</div>
				</div>
			</div>
			<div className="Footer__bottom">
				<div className="container Footer__bottom-container">
					<span>TUOTOWN © 2021 Торговая марка TUOTOWN зарегистрирована. Все права защищены и принадлежат правообладателям.</span>
					<img src="/img/Footer/teka.png" alt="" />
				</div>
			</div>
		</footer>
	)
}

export default Footer