import React from 'react'
import hero from '../../assets/hero.png'
import Image from 'next/image'
import {Lottie} from '@/components/Lottie'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex font-family' >
      <div className='md:flex flex-col hidden w-1/2 justify-around bg-eblue dark:bg-darksupport items-center h-screen px-14 m-0'>
        <div className='flex items-center'>
            <Image src={hero} width={150} alt="hero" />
            <div className='text-5xl font-extrabold'>WeStore</div>
        </div>
        <div className='dark:text-eblue text-white text-3xl font-bold text-center' >Best place to manage your files</div>
        <Lottie />
      </div>
      <div className='w-screen'>{children}</div>
    </div>
  )
}

export default layout
