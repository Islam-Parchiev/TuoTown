import React,{FC} from 'react'
import Quantity from '../components/Quantity/Quantity'
import Categories from '../components/Categories/Categories'
import AboutUs from '../components/AboutUs/AboutUs'

const Main:FC = () => {
  return (
    <main className='Main'>
      <Quantity/>
      <Categories/>
      <AboutUs/>
    </main>
  )
}

export default Main