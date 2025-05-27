import React from 'react'
import Image from 'next/image'
import hero from '../assets/herobg.png'
import Button from './Button'

function Hero() {
  return (
    <div className='flex justify-around items-center h-96'>
      <div>
        <h1 className='text-4xl md:text-7xl font-extrabold text-center dark:text-white text-eblue'>Experience cloud storage with WeStore</h1>
        <p className='text-center text-sm md:text-2xl font-semibold'>We store is a place where you can store your files </p>
        <div className='flex justify-center'>
          <Button route='/signup' className='bg-eblue text-white hover:scale-110 transition-all md:w-1/4 w-1/2 mt-4'>Get Started</Button> 
        </div>
      </div>
    </div>
  )
}

export default Hero
