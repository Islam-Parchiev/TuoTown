import React from 'react'

import cn from 'classnames';

import styles from './Button.module.scss';


interface IButton {
	onclick:() => void
	variant:string
	size:string	
	type:string
	children:any
}

const Button:React.FC<IButton> = ({onclick,variant='',size='medium',type='one',children}) => {
  			
	const mainCh = cn(
		styles.button,
		styles[size],
  		styles[variant],
		styles[type],
	)

	return (
		<button onClick={onclick} className={`btn-reset ${mainCh}`}>
			{children}
		</button>
	)
}

export default Button