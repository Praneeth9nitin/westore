"use client"

import { Button } from "../components/ui/button"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { createUser } from "@/actions/route"
import { useState } from "react"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import hero from '../assets/hero.png'
import Image from 'next/image'
import { Lottie2 } from "./Lottie"

export default function AuthForm() {
    const session = useSession()
    const router = useRouter()
    const [form,setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [error,setError] = useState<Boolean>()
    const [loading,setLoading] = useState<Boolean>(false)

    return <div className="flex flex-col justify-center items-center md:h-screen w-full ">
        <div className={`${error?"bg-red-600 hidden":"hidden"}`}>Invalid credentials</div>
        <div className='flex md:hidden items-center'>
            <Image src={hero} width={150} alt="hero" />
            <div className='text-5xl font-extrabold'>WeStore</div>
        </div>
        <div className="flex flex-col gap-5 p-5 rounded-2xl shadow-2xl shadow-darksupport">
            <div className="text-center text-5xl p-5" >Sign up</div>
            <div>
                <span>Username</span>
                <Input type="text" placeholder="Enter your username" onChange={e=>setForm(prev=>({...prev,username:e.target.value}))} />
            </div>
            <div>
                <span>Email</span>
                <Input type="email" placeholder="Enter your email" onChange={e=>setForm(prev=>({...prev,email:e.target.value}))} />
            </div>
            <div>
                <span>Password</span>
                <Input type="password" placeholder="Enter your password" onChange={e=>setForm(prev=>({...prev,password:e.target.value}))} />
            </div>
            {/* <Button route='/signup' func={()=>func(form)} className="bg-eblue text-white" >Sign up</Button> */}
            <Button className="bg-eblue text-white" onClick={async()=>{const result = await func(form);setError(result);setLoading(prev=>!prev)}}>{loading?<Lottie2 />:"Sign up"}</Button>
            <div>already have a account <span onClick={()=>signIn()} className="cursor-pointer underline text-eblue" >Sign in</span></div>
        </div>
    </div>
}


const func = async(form:{username:string,email:string,password:string}):Promise<boolean> =>{
    try{
        const user = await createUser({ userdata: form })
        if(user.error){
            throw user.error
        }
        await signIn('credentials', {
            redirect: true,
            callbackUrl:'/dashboard',
            username: form.username,
            email: form.email,
            password: form.password,
        });
        return false
    }catch (error) {
        return true
    }
       
}