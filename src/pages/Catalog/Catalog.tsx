import React,{useState,useEffect} from 'react'
import axios from 'axios'

// import { useSelector } from 'react-redux'

import { Helmet } from 'react-helmet'

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
import CardSkeleton from '../../components/Card/CardSkeleton'
// import { selectCart } from '../../redux/slices/cartSlice'


const fakeArr = [...Array(10)];

const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	// const {items} = useSelector(selectCart);
	const [loading,setLoading] = useState<boolean>(true);
	const [knives, setKnives] = useState<ICard[]>([])
	const [page,setPage] = useState<number>(1);
	const [searchValue,setSearchValue] = useState<string>('');
	const debouncedValue = useDebounce(searchValue,600);
	const search = `&q=${debouncedValue}`;
	useEffect(() => {
	  async	function fetchData() {
           	 try {
				setLoading(true)
             	
				const {data} = await axios.get(`http://localhost:4200/knives?_page=${page}&_limit=6${search.length > 0 ? search : null}`)
				setKnives(data)
			}catch(e) {
 
				alert(e);
			}finally {
				setLoading(false);
			}
		}

		fetchData()
	
		

	}, [page,search])
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
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
					<h1 className="Catalog__title">
				Ножи
					</h1>
					<div className="Catalog__wrapper">
						<div className="Catalog__left">
							<Filter />
							<Search setSearchValue={setSearchValue} searchValue={searchValue}/>
						</div>
						<ul className="list-reset Catalog__goods">
							{
								loading === true ? fakeArr.map(i => (
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
								))
							}
							{/* {knives.map((knive: ICard): any => (
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
						))} */}
						</ul>
  

        
		                {/* {items.map(item => (
							<li>{item.price}</li>
						))} */}
					
					</div>
					<Pagination  knives={knives} setPage={setPage} page={page}/>
					<Send/>
				</div>
			</main>
		</>
	)
}

export default Catalog