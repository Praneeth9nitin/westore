"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from 'next/image';
import hero from '../assets/hero.png';
import { ModeToggle } from "./Toggle";

function Nav() {
  return (
   <div className="flex items-center justify-center">
     <div className='flex items-center'>
        <Image src={hero} width={70} alt="hero" />
        <div className='text-2xl font-extrabold'>WeStore</div>
     </div>
     <Input type="text" placeholder="Search..." className="w-full max-w-md mx-auto my-4 p-2 border border-gray-300 rounded-lg" />
     <div className="flex flex-row items-center gap-2">
        <Button>Upload</Button>
        <ModeToggle />
        <div className="border-2 w-10 h-10 p-2 rounded-full flex items-center justify-center" >P</div>
     </div>
   </div>
  )
}

export default Nav
