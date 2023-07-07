import React,{FC} from 'react'
import Quantity from '../components/Quantity/Quantity'
import Categories from '../components/Categories/Categories'

const Main:FC = () => {
  return (
    <main className='Main'>
      <Quantity/>
      <Categories/>
    </main>
  )
}

export default Main