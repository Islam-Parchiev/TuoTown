export interface IButton {
	onclick:() => void
	variant:'primary' | 'secondary'
	size:'small'|'medium'|'large'	
	type:'one'|'two'
	children:JSX.Element | string
	otherClass?:string
}