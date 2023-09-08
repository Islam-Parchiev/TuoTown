import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../ErrorFallback/ErrorFallback'

import Send from '../Send/Send'

import './Categories.scss'
import CategoriesGoods from '../CategoriesGoods/CategoriesGoods'
import CategoriesList from '../CategoriesList/CategoriesList'

const Categories = () => {
	const [category, setCategory] = React.useState<number>(1)

	const onChangeCategory = React.useCallback((number: number) => {
		setCategory(number)
	}, [])

	return (
		<section className="Categories">
			<div className="container Categories__container">
				<div className="Categories__top">
					<CategoriesList
						category={category}
						setCategory={onChangeCategory}
					/>
				</div>
				<div className="Categories__bottom">
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<CategoriesGoods category={category} />
					</ErrorBoundary>
					<Send />
				</div>
			</div>
		</section>
	)
}

export default Categories
