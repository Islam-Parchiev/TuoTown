export interface ICard{
	id:number,
    title:string,
    price:number,
    descr:string,
    new:boolean,
    img:string,
    type:any[],
    newItem?:boolean
}