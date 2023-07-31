export interface CartItem {
	id:number
	title:string
	price:number
	imageUrl:string
	count?:number
}
export interface CartSliceState {
	items:CartItem[]
	price:number
}