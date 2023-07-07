import React from 'react'
import styles from "./Card.module.scss"
const Card:React.FC = () => {
  return (
    <li className={styles.Card}>
        <div className={styles.Card__top}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className={styles.Card__img}>
    <img src="/img/Card/12.png" alt="" />
</div>
        </div>
        <div className={styles.Card__bottom}>
            <h4 className={styles.Card__title}>
            Складной нож SQ01-B
            </h4>
           <div className={styles.Card__info}>
           <span className={styles.Card__price}>
            850 р.
            </span>
            <span className={styles.Card__new}>
                Новинка
            </span>
           </div>
        </div>
    </li>
  )
}

export default Card