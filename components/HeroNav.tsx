import React from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'
import Button from './Button'
import {ModeToggle} from "@/components/Toggle";

function HeroNav() {
  return (
    <div className='flex justify-between items-center px-2 dark:bg-darksupport bg-eblue'>
      <div className='flex items-center' >
        <Image src={hero} className='md:w-24 w-14' alt="hero" />
        <div className='md:text-2xl font-extrabold'>WeStore</div>
      </div>
      <div className='flex md:gap-2 gap-1' >
        <Button route='signin' className='bg-transparent p-0 text-sm text-black hover:bg-transparent hover:scale-110 transition-all dark:text-eblue'>Sign in</Button>
        <Button route='/signup' className='dark:bg-eblue text-sm hover:scale-110'>Sign up</Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default HeroNav
