import React,{FC} from 'react'

import './Sidebar.scss';

const Sidebar:FC = () => {
	return (
		<div className="overlay">
			<div className="Sidebar">
				<button className="btn-reset Sidebar__back">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none">
						<path
							d="M7 13L1 7L7 1"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<ul className="list-reset Sidebar__list">
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
					<li className="Sidebar__list-item">
						<a href="/">Кухонные ножи TUOTOWN </a>
					</li>
				</ul>
				<nav className="Sidebar__nav">
					<ul className="list-reset Sidebar__nav-list nav__list">
						<li className="nav__list-item">
							<a href="/">Новости </a>
						</li>
						<li className="nav__list-item">
							<a href="/">Новости </a>
						</li>
						<li className="nav__list-item">
							<a href="/">Новости </a>
						</li>
						<li className="nav__list-item">
							<a href="/">Новости </a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar