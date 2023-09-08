import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { useAppSelector } from '../../redux/store'

import { useAppDispatch } from '../../redux/store'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'

import './Catalog.scss'

import Send from '../../components/Send/Send'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'

import { setPage } from '../../redux/slices/filterSlice'
import { setFilter, setSort, setFilters } from '../../redux/slices/filterSlice'
import CatalogGoods from '../../components/CatalogGoods/CatalogGoods'

import ErrorFallback from '../../components/ErrorFallback/ErrorFallback'
import { IToggleSidebar } from '../../types/Sidebar'

const Catalog: React.FC<IToggleSidebar> = ({ toggleSidebar, setToggleSidebar }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { knives } = useAppSelector(state => state.catalogSlice)
	const { neww, page, searchValue, sort } = useAppSelector(state => state.filterSlice)
	

	const [knivesPerPage] = useState(6)

	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))
			
			

			dispatch(setFilters({ ...params }))
		}
	}, [])

	

	useEffect(() => {
		const queryString = qs.stringify({
			sort,
			new: neww,
			search: searchValue,
			page,
		})
		navigate(`?${queryString}`)
		
	}, [page, searchValue, neww, sort])

	

	const paginate = (pageNumber: number) => dispatch(setPage(pageNumber))

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Catalog</title>
			</Helmet>
			<main className="Catalog">
				{toggleSidebar === true ? (
					<Sidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				) : null}
				<Home />

				<div className="Catalog__container">
					<h1 className="Catalog__title">Ножи</h1>
					<div className="Catalog__wrapper">
						<div className="Catalog__left">
							<Filter />
							<Search />
							<ul className="list-reset Catalog__mobile-filters">
								<li className="Accordion__item">
									Новинки{' '}
									<input
										type="checkbox"
										checked={neww}
										onChange={() =>
											dispatch(setFilter(!neww))
										}
									/>
								</li>
								<li className="Accordion__item">
									По цене{' '}
									<input
										type="checkbox"
										checked={sort}
										onChange={() =>
											dispatch(setSort(!sort))
										}
									/>
								</li>
							</ul>
						</div>

						{/* <ul className="list-reset Catalog__goods">
							{
								status === Status.LOADING ? fakeArr.map(i => (
									<CardSkeleton/>
								)):currentKnives.map((knive: ICard): any => (
									<Card
										key={knive.id}
										id={knive.id}
										descr={knive.descr}
										title={knive.title}
										new={knive.new}
										newItem={knive.new}
										price={knive.price}
										imageUrl={knive.imageUrl}
										type={knive.type}
									/>
								))
							}
						
						</ul> */}
						<ErrorBoundary FallbackComponent={ErrorFallback}>
							<CatalogGoods />
						</ErrorBoundary>
					</div>
					<Pagination
						totalKnives={knives.length}
						paginate={paginate}
						page={page}
						knivesPerPage={knivesPerPage}
					/>
					<Send />
				</div>
			</main>
		</>
	)
}

export default Catalog
