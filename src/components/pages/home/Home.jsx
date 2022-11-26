import React from 'react'
import { BsStars } from 'react-icons/bs';
import './home.css'
import Input from './Input';

const Home = () => {
  return (
    <div className='flex-grow border-l border-r border-gray-300 max-w-2xl'>
      <div className='flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50'>
      <h1 className='text-lg sm-text-xl font-bold'>Home</h1>
      <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
        <BsStars className='h-7 text-lg sm-text-xl' />
      </div>
      </div>
      <div>
        <Input />
      </div>

    </div>
  )
}

export default Home