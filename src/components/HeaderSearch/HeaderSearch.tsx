import {useEffect, useRef} from 'react'

import Button from '../Button/Button';

import styles from './HeaderSearch.module.scss';

const HeaderSearch = ({setHeaderSearch}:any) => {
	const headerSearchRef = useRef<any>(null);
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
	return (
		<div ref={headerSearchRef} className={styles.HeaderSearch}>
			<label className={styles.HeaderSearch__input}>
				<input type="text" className="input-reset" />
			</label>
			<ul className={`list-reset ${styles.HeaderSearch__items}`}>
		
			
				<li className={styles.HeaderSearch__item}>
					<div className={styles.HeaderSearch__item_img}>
						<img src="/img/1.png" alt="" />
					</div>
					<div className={styles.HeaderSearch__item_info}>
						<h3 className={styles.HeaderSearch__item_title}>dddddddddd</h3>
						<span className={styles.HeaderSearch__item_price}>1000 р.</span>
					</div>
					<Button type={'two'} size={'small'} variant={'primary'} onclick={()=> console.log('clickHeaderSearchItem')}>A</Button>
				</li>
			
				
			</ul>
		</div>
	)
}

export default HeaderSearch