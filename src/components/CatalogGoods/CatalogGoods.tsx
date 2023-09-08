import { FC, useState, useEffect } from 'react'

import { useAppSelector } from '../../redux/store'

import { useAppDispatch } from '../../redux/store'
import { fetchCatalogItems } from '../../redux/slices/catalogSlice'
import CardSkeleton from '../Card/CardSkeleton'
import { Status } from '../../redux/slices/catalogSlice'
import { ICard } from '../../types/Card'
import Card from '../Card/Card'
import { setPage } from '../../redux/slices/filterSlice'
import { useDebounce } from '../../hooks/debounce'
const fakeArr = [...Array(10)]
const CatalogGoods: FC = () => {
	const { knives, status } = useAppSelector(state => state.catalogSlice)
	const { neww, page, searchValue, sort } = useAppSelector(state => state.filterSlice)
	const [knivesPerPage] = useState<number>(6)
	const lastKniveIndex = page * knivesPerPage
	const firstKniveIndex = lastKniveIndex - knivesPerPage
	const currentKnives = knives.slice(firstKniveIndex, lastKniveIndex)

	const dispatch = useAppDispatch()
	const debouncedValue = useDebounce(searchValue, 600)

	const search = searchValue.length > 0 ? `&title=${debouncedValue}` : ''
	const check = neww === true ? '&new=true' : ''
	const sortByPrice = sort === true ? '&sortBy=price&order=asc' : ''

	useEffect(() => {
		// @ts-ignore
		dispatch(fetchCatalogItems({ check, search, sortByPrice }))
		

		searchValue.length > 3 && dispatch(setPage(1))
	}, [search, check, sort])
	return (
		<ul className="list-reset Catalog__goods">
			{status === Status.LOADING
				? fakeArr.map(i => <CardSkeleton />)
				: currentKnives.map(
					(knive: ICard): JSX.Element => (
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
					),
				  )}
		</ul>
	)
}

export default CatalogGoods
