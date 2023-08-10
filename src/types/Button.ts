export interface IButton {
	onclick:() => void
	variant:'primary' | 'secondary'
	size:'small'|'medium'|'large'	
	type:'one'|'two'
	children:any
	otherClass?:string
}