import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Main from '../../pages/Main/Main'

import { IToggleSidebar } from '../../types/Sidebar'

const Catalog = React.lazy(()=> import(/*webpackChunkName: "Catalog"*/ '../../pages/Catalog/Catalog'))
const Basket = React.lazy(()=> import(/*webpackChunkName: "Basket"*/ '../../pages/Basket/Basket'))
const Service = React.lazy(()=> import(/*webpackChunkName: "Service"*/ '../../pages/Service/Service'))
const Map = React.lazy(()=> import(/*webpackChunkName: "Map"*/ '../../pages/Map/Map'))
const Product = React.lazy(()=>import( /*webpackChunkName: "Product"*/ '../../pages/Product/Product'))
const NotFound = React.lazy(()=> import(/*webpackChunkName: "NotFound"*/ '../../pages/NotFound/NotFound'))

const Router: React.FC<IToggleSidebar> = ({
	toggleSidebar,
	setToggleSidebar,
}) => {
	const location = useLocation()
	return (
		<Routes location={location} key={location.pathname}>
			<Route
				path="/"
				element={
					<Main
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				}
			/>
			<Route
				path="/catalog"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<Catalog 
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}/>
					</React.Suspense>
				}/>
			<Route
				path="/basket"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<Basket
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</React.Suspense>
				}
			/>
			<Route
				path="/service"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<Service
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</React.Suspense>
				}
			/>
			<Route
				path="/map"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<Map
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</React.Suspense>
				}
			/>
			<Route
				path="/product/:id"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<Product
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</React.Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<React.Suspense fallback={<div className="Preloader">Загрузка...</div>}>
						<NotFound
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					</React.Suspense>
				}
			/>
		</Routes>
	)
}

export default Router
