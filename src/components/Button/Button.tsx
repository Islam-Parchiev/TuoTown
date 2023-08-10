import React from 'react'

import cn from 'classnames';

import { IButton } from '../../types/Button';

import styles from './Button.module.scss';



const Button:React.FC<IButton> = ({onclick,variant='',size='medium',type='one',children,otherClass}) => {
  			
	const mainCh = cn(
		styles.button,
		styles[size],
  		styles[variant],
		styles[type],
	)

	return (
		<button onClick={onclick} className={`btn-reset ${mainCh} ${otherClass}`}>
			{children}
		</button>
	)
}

export default Button