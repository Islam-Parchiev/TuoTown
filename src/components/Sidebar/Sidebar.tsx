import React, { FC, useEffect } from 'react'

import {Link} from 'react-router-dom';

import './Sidebar.scss'

const Sidebar: FC<any> = ({ toggleSidebar, setToggleSidebar }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])

	return (
		<div className="overlay">
			<div className="Sidebar">
				<button
					onClick={() => setToggleSidebar(!toggleSidebar)}
					className="btn-reset Sidebar__back">
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
						<Link to="/catalog">Каталог </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Складные ножи TUOTOWN </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Кухонные ножи QXF </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Точильные камни </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Наборы для BBQ </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Кухонные принадлежности </Link>
					</li>
					<li className="Sidebar__list-item">
						<Link to="/">Туристические товары</Link>
					</li>
				</ul>
				<nav className="Sidebar__nav">
					<ul className="list-reset Sidebar__nav-list nav__list">
						<li className="nav__list-item">
							<Link to="/">Новости </Link>
						</li>
						<li className="nav__list-item">
							<Link to="/"> О компании </Link>
						</li>
						<li className="nav__list-item">
							<Link to="/">Контакты </Link>
						</li>
						<li className="nav__list-item">
							<Link to="/">Как проехать </Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar
