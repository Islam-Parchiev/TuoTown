import {useEffect, useRef, useState} from 'react'
import axios from 'axios';

import Button from '../Button/Button';
import { useDebounce } from '../../hooks/debounce';
import { ICard } from '../../types/Card';

import styles from './HeaderSearch.module.scss';

const HeaderSearch = ({setHeaderSearch}:any) => {
	const headerSearchRef = useRef<any>(null);

	const [headerSearchValue,setHeaderSearchValue] = useState<string>('');
	const [headerSearchItems,setHeaderSearchItems] = useState<ICard[]>([]);
	const debouncedValue = useDebounce(headerSearchValue,600);
	const search = `?title=${debouncedValue}`;
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event:any) {
			// @ts-ignore
			if (headerSearchRef.current && !headerSearchRef.current.contains(event.target)) {
				
				console.log('You clicked outside of me!');
				setHeaderSearch(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
		// eslint-disable-next-line
		}, [headerSearchRef]);

	 useEffect(() => {
		async function fetchData() {
			// http://localhost:4200/knives?_page=${page}&_limit=6${search.length > 0 ? search : null}
			const { data } = await axios.get(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items${search.length > 1 ? search : null}`)
			console.log('axios',data)
			setHeaderSearchItems(headerSearchValue.length > 2 && data);
			console.log('hitem',headerSearchItems)
		}

		fetchData()
	}, [search]) 
	return (
		<div ref={headerSearchRef} className={styles.HeaderSearch}>
			<label className={styles.HeaderSearch__input}>
				<input
				 type="text" 
				 className="input-reset"
				 value={headerSearchValue}

				 onChange={(e) => setHeaderSearchValue(e.target.value)}

				/>
			</label>
			<ul className={`list-reset ${styles.HeaderSearch__items}`}>
				{
					headerSearchItems.length >= 1 &&
					headerSearchItems.map(item => (
						<li className={styles.HeaderSearch__item}>
							<div className={styles.HeaderSearch__item_img}>
								<img src={item.imageUrl} alt="" />
							</div>
							<div className={styles.HeaderSearch__item_info}>
								<h3 className={styles.HeaderSearch__item_title}>{item.title}</h3>
								<span className={styles.HeaderSearch__item_price}>{item.price} р.</span>
							</div>
							<Button type={'two'} size={'small'} variant={'primary'} onclick={()=> console.log('clickHeaderSearchItem')}>A</Button>
						</li>
					))
				}
			
				{/* <li className={styles.HeaderSearch__item}>
					<div className={styles.HeaderSearch__item_img}>
						<img src="/img/1.png" alt="" />
					</div>
					<div className={styles.HeaderSearch__item_info}>
						<h3 className={styles.HeaderSearch__item_title}>dddddddddd</h3>
						<span className={styles.HeaderSearch__item_price}>1000 р.</span>
					</div>
					<Button type={'two'} size={'small'} variant={'primary'} onclick={()=> console.log('clickHeaderSearchItem')}>A</Button>
				</li> */}
			
				
			</ul>
		</div>
	)
}

export default HeaderSearch