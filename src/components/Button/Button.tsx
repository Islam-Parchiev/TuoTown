import {FC,forwardRef} from 'react'

import cn from 'classnames';
import { motion } from 'framer-motion'

import { IButton } from '../../types/Button';

import styles from './Button.module.scss';


const Button:FC<IButton> = forwardRef(({onclick,variant='',size='medium',type='one',children,otherClass},ref:any) => {
  			
	const mainCh = cn(
		styles.button,
		styles[size],
  		styles[variant],
		styles[type],
	)

	return (
		<button 
			ref={ref}
			onClick={onclick}
			className={`btn-reset ${mainCh} ${otherClass}`}>
			{children}
		</button>
	)
})
export const MButton = motion(Button);
export default Button