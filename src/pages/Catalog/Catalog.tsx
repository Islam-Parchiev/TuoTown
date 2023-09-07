import React,{useState,useEffect} from 'react'

import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { useAppSelector } from '../../redux/store';

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
import { setPage } from '../../redux/slices/filterSlice'
import { setFilter,setSort,setFilters } from '../../redux/slices/filterSlice';
import CatalogGoods from '../../components/CatalogGoods/CatalogGoods';


import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import { IToggleSidebar } from '../../types/Sidebar';

const fakeArr = [...Array(10)];

const Catalog:React.FC<IToggleSidebar> = ({toggleSidebar,setToggleSidebar}) => {
	const navigate = useNavigate()
	const dispatch =useAppDispatch();
	const {knives,status} = useAppSelector((state)=> state.catalogSlice)
	const { neww,page,searchValue,sort } =useAppSelector((state)=> state.filterSlice);
	console.log('catalog',knives);
	

	const [knivesPerPage] = useState(6);
	
	const debouncedValue = useDebounce(searchValue,600);
	
	const search = searchValue.length>0?`&title=${debouncedValue}`:'';
	const check = neww===true?'&new=true':'';
	const sortByPrice= sort===true?'&sortBy=price&order=asc':'';

	useEffect(()=> {
    if(window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			console.log('params:Catalog',params);
			// {sort: 'true', new: 'true', search: '', page: '2'}

			dispatch(setFilters({...params}))
		}
	},[])

	// useEffect(() => {

	// 	// @ts-ignore
	// 	dispatch(fetchCatalogItems({check,search,sortByPrice}))
	// 	console.log('goodssss')
	
	// 	searchValue.length > 3 && dispatch(setPage(1))
	// 	// knives && knives.length >6 && setPage(1)

	// }, [search,check,sort])

	useEffect(()=> {
    	const queryString = qs.stringify({
			sort,
			new:neww,
			search:searchValue,
			page,
		});
		navigate(`?${queryString}`)
		console.log(queryString);
	},[page,searchValue,neww,sort]);

	// console.log('filterrrrrrrr',knives.filter((value:any) => value.new === true))
	const lastKniveIndex = page * knivesPerPage;
	const firstKniveIndex = lastKniveIndex - knivesPerPage;
	const currentKnives= knives.slice(firstKniveIndex,lastKniveIndex)

	const paginate = (pageNumber:number) => dispatch(setPage(pageNumber))

	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Catalog</title>
				
			</Helmet>
			<motion.main 
			className="Catalog"
			initial={{width:0}}
			animate={{width:'100%'}}
			exit={{x:window.innerWidth,transition:{duration:0.1}}}>
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
							<Filter/>
							<Search/>
							<ul className="list-reset Catalog__mobile-filters">
								<li className="Accordion__item">
								Новинки <input type="checkbox" checked={neww} onChange={()=> dispatch(setFilter(!neww))} />
								</li>
								<li className="Accordion__item">
								По цене <input type="checkbox" checked={sort} onChange={()=>dispatch(setSort(!sort))} />
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
						<ErrorBoundary 
							FallbackComponent={ErrorFallback}>
                       	<CatalogGoods/>
							
						</ErrorBoundary>

        
	
					
					</div>
					<Pagination  
						totalKnives={knives.length} 
						paginate={paginate} 
						page={page} 
						knivesPerPage={knivesPerPage}/>
					<Send/>
				</div>
			</motion.main>
		</>
	)
}

export default Catalog