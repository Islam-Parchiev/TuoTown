import { FC, useEffect,useRef } from 'react'

import {Link} from 'react-router-dom';

import { IToggleSidebar } from '../../types/Sidebar';

import './Sidebar.scss'

const Sidebar: FC<IToggleSidebar> = ({ toggleSidebar, setToggleSidebar }) => {
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event:MouseEvent) {
			// @ts-ignore
		  if (ref.current && !ref.current.contains(event.target)) {
				
				console.log('You clicked outside of me!');
				setToggleSidebar(false);
		  }
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
		  // Unbind the event listener on clean up
		  document.removeEventListener('mousedown', handleClickOutside);
		};
		// eslint-disable-next-line
	  }, [ref]);
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		console.log('sidebar mount')
		return () => {
			console.log('sidebar unmount')
			document.body.style.overflow = 'unset'
		}
	}, [])

	return (
		<div className="overlay">
			<div ref={ref} className="Sidebar">
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
						<Link to="/service">Сервис </Link>
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
							<Link to="/map">Как проехать </Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar
