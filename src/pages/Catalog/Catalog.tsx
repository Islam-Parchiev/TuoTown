import React,{useState,useEffect} from 'react'

import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { useDebounce } from '../../hooks/debounce'
import { useAppDispatch } from '../../redux/store'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'
import { fetchCatalogItems } from '../../redux/slices/catalogSlice'
import { Status } from '../../redux/slices/catalogSlice'
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
	const {knives,status} = useSelector((state:any)=> state.catalogSlice)
	const { neww } =useSelector((state:any)=> state.filterSlice);
	console.log('catalog',knives);
	// console.log('newww',neww);
	
	const [page,setPage] = useState<number>(1);
	const [checked,setChecked] = useState<boolean>(false);
	const [searchValue,setSearchValue] = useState<string>('');


	const [knivesPerPage] = useState(6);
	
	const debouncedValue = useDebounce(searchValue,600);
	const search = `&title=${debouncedValue}`;
	const check = `&new=${neww}`;
	useEffect(() => {

		// @ts-ignore
		dispatch(fetchCatalogItems({page,checked,check,searchValue,search,neww}))
		console.log('goodssss')
	
		searchValue.length >= 3 && setPage(1)
		// knives && knives.length >6 && setPage(1)

	}, [page,search,searchValue,checked,check,neww])
	// console.log('filterrrrrrrr',knives.filter((value:any) => value.new === true))
	const lastKniveIndex = page * knivesPerPage;
	const firstKniveIndex = lastKniveIndex - knivesPerPage;
	const currentKnives= knives.slice(firstKniveIndex,lastKniveIndex)

	const paginate = (pageNumber:number) => setPage(pageNumber)

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
						
						</ul>
  

        
	
					
					</div>
					<Pagination  
						totalKnives={knives.length} 
						paginate={paginate} 
						page={page} 
						knivesPerPage={knivesPerPage}/>
					<Send/>
				</div>
			</main>
		</>
	)
}

export default Catalog