import React,{useState,useEffect} from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'

import './Catalog.scss';
import { ICard } from '../../types/Card';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Pagination from '../../components/Pagination/Pagination';


const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const [knives, setKnives] = useState<ICard[]>([])
	const [page,setPage] = useState<number>(1);
	useEffect(() => {
		fetch(`http://localhost:4200/knives?_page=${page}&_limit=6`)
			.then(res => res.json())
			.then(data => setKnives(data))
	}, [page])
	return (
		<main className="Catalog">
			{toggleSidebar === true ? (
				<Sidebar
					toggleSidebar={toggleSidebar}
					setToggleSidebar={setToggleSidebar}
				/>
			) : null}
			<Home />

			<div className="Catalog__container">
				<h1 className="Catalog__title">
				Ножи
				</h1>
				<div className="Catalog__wrapper">
					<Filter />
					<ul className="list-reset Catalog__goods">
						{knives.map((knive: ICard): any => (
							<Card
								key={knive.id}
								id={knive.id}
								descr={knive.descr}
								title={knive.title}
								new={knive.new}
								newItem={knive.new}
								price={knive.price}
								img={knive.img}
								type={knive.type}
							/>
						))}
					</ul>

					
				</div>
				<Pagination setPage={setPage} page={page}/>
				<Form/>
			</div>
		</main>
	)
}

export default Catalog