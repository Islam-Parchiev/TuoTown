import {FC,useEffect,useState} from 'react'

import { ICard } from '../../types/Card'
import Collection from '../Collection/Collection'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'
import { Status } from '../../redux/slices/catalogSlice'
const CategoriesGoods:FC<any> = ({category}) => {
	const fakeArr = [...Array(6)];
	const [knives, setKnives] = useState<ICard[]>([])
	const [status,setStatus]= useState('loading');
	useEffect(() => {
		fetch(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items?page=1&limit=6&type=${category}`)
			.then(res => res.json())
			.then(data => setKnives(data))
			.finally(()=> setStatus('success'))
	}, [category])

	return (
		<ul className="list-reset Categories__goods">
			<Collection />
			{status===Status.LOADING ? fakeArr.map(i=> (
				<CardSkeleton/>
			)):knives.map((knive: ICard): any => (
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
			))}
		</ul>
	)
}

export default CategoriesGoods