import {useState,useEffect} from 'react'

const useLocalStorage = (initialValue:any,key:any) => {

	const getValue = () => {
		const storage = localStorage.getItem(key);

		if(storage) {
			return JSON.parse(storage);
		}
		return initialValue;
	}

	const [value,setValue] = useState(getValue);

	useEffect(()=> {
  	localStorage.setItem(key,JSON.stringify(value))
		//@ts-ignore
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[value]);

	return [value,setValue];
}

export  {useLocalStorage}