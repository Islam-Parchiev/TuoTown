import React,{useState,useEffect} from 'react'
// import axios from 'axios'

// import { useSelector } from 'react-redux'

import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { useDebounce } from '../../hooks/debounce'
import { useAppDispatch } from '../../redux/store'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'
import { fetchCatalogItems } from '../../redux/slices/catalogSlice'

import './Catalog.scss';
import { ICard } from '../../types/Card';
import Card from '../../components/Card/Card';
import Send from '../../components/Send/Send';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import CardSkeleton from '../../components/Card/CardSkeleton'


const fakeArr = [...Array(10)];

const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {
	const dispatch =useAppDispatch();
	const {knives} = useSelector((state:any)=> state.catalogSlice)
	console.log('catalog',knives);
	// const {items} = useSelector(selectCart);
	const [loading,setLoading] = useState<boolean>(true);
	// const [knives, setKnives] = useState<ICard[]>([])
	const [page,setPage] = useState<number>(1);
	const [checked,setChecked] = useState<boolean>(false);
	const [searchValue,setSearchValue] = useState<string>('');
	const debouncedValue = useDebounce(searchValue,600);
	const search = `&title=${debouncedValue}`;
	const check = `&new=${checked}`;
	useEffect(() => {
	// 	console.log('check',checked)
	//   async	function fetchData() {
    //        	 try {
	// 			setLoading(true)
	
	// 			// http://localhost:4200/knives?_page=${page}&_limit=6${search.length > 0 ? search : null}
	// 			// eslint-disable-next-line max-len
	// 			const {data} = await axios.get(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items?page=${page}&
	// limit=6${checked===true ? check :''}${searchValue.length > 0 ? search :''}`)
	// 			setKnives(data)
	// 		}catch(e) {
 
	// 			alert(e);
	// 		}finally {
	// 			setLoading(false);
	// 		}
	// 	}

	// 	fetchData()
	
	// 	searchValue.length > 3 && setPage(1)
    //     	knives.length >6 && setPage(1)

	// @ts-ignore
	dispatch(fetchCatalogItems({page,checked,check,searchValue,search}))
	setLoading(false)
	}, [page,search,searchValue,checked,check])
	
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
							<Filter setChecked={setChecked} checked={checked}/>
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