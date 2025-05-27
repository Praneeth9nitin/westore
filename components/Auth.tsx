"use client"

import Button from "./Button"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { createUser } from "@/actions/route"
import { useState } from "react"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function AuthForm() {
    const session = useSession()
    const router = useRouter()
    const [form,setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    return <div className="flex justify-center items-center h-screen w-full ">
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
            <Button route='/signup' func={()=>func(form)} className="bg-eblue text-white" >Sign up</Button>
            <button onClick={()=>signOut()}>logout</button>
            <div>already have a account <span onClick={()=>signIn()} className="cursor-pointer underline text-eblue" >Sign in</span></div>
            <div>{JSON.stringify(session)}</div>
        </div>
    </div>
}

const func = async(form:{username:string,email:string,password:string}) =>{
    const user = await createUser({ userdata: form })
    if(user.status === 200)
        await signIn('credentials', {
            redirect: false,
            username: form.username,
            email: form.email,
            password: form.password,
    });
}