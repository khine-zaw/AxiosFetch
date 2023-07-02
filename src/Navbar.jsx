// import React from 'react'
import {RiRestaurant2Fill} from 'react-icons/ri' 
import { Link } from 'react-router-dom'
import Meals from './Meals'

const Navbar = () => {
  return (
    <Link to={'/'} Element={Meals}>
      <div className="flex items-center gap-2 my-8">
          <RiRestaurant2Fill className='text-3xl text-pink-500' />
          <p className='text-2xl text-pink-500'>Foodie</p> 
      </div>
    </Link>
  )
}

export default Navbar