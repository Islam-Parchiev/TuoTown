import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import Main from '../../pages/Main/Main'

import Catalog from '../../pages/Catalog/Catalog'
import Basket from '../../pages/Basket/Basket'
import Service from '../../pages/Service/Service'
import Map from '../../pages/Map/Map'
import Product from '../../pages/Product/Product'
import NotFound from '../../pages/NotFound/NotFound'
import { IToggleSidebar } from '../../types/Sidebar'

const AnimatedRoutes: React.FC<IToggleSidebar> = ({
	toggleSidebar,
	setToggleSidebar,
}) => {
	const location = useLocation()
	return (
		<AnimatePresence>
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
						<Catalog
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
				<Route
					path="/basket"
					element={
						<Basket
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
				<Route
					path="/service"
					element={
						<Service
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
				<Route
					path="/map"
					element={
						<Map
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
				<Route
					path="/product/:id"
					element={
						<Product
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
				<Route
					path="*"
					element={
						<NotFound
							toggleSidebar={toggleSidebar}
							setToggleSidebar={setToggleSidebar}
						/>
					}
				/>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
