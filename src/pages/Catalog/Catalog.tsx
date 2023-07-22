import React,{useState,useEffect} from 'react'

import { useDebounce } from '../../hooks/debounce'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'

import './Catalog.scss';
import { ICard } from '../../types/Card';
import Card from '../../components/Card/Card';
import Send from '../../components/Send/Send';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';


const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const [knives, setKnives] = useState<ICard[]>([])
	const [page,setPage] = useState<number>(1);
	const [searchValue,setSearchValue] = useState<string>('');
	const debouncedValue = useDebounce(searchValue,600);
	const search = `&q=${debouncedValue}`;
	useEffect(() => {
		fetch(`http://localhost:4200/knives?_page=${page}&_limit=6${searchValue.length > 0 ? search : null}`)
			.then(res => res.json())
			.then(data => setKnives(data))
	}, [page,searchValue,search])
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
					<div className="Catalog__left">
						<Filter />
						<Search setSearchValue={setSearchValue} searchValue={searchValue}/>
					</div>
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
				<Send/>
			</div>
		</main>
	)
}

export default Catalog