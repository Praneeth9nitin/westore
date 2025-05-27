"use client"

import { Button as ButtonUI } from "@/components/ui/button"
import { signIn, SignInResponse } from "next-auth/react"
import { appRouterContext } from "next/dist/server/route-modules/app-route/shared-modules"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

export default function Button({children,className,route,func}:{children:ReactNode,className: string, route:string, func?:any}):React.JSX.Element {
    const router = useRouter()
    
    return <ButtonUI onClick={()=>click(func,`${route}`,router)} className={`${className} cursor-pointer`} >{children}</ButtonUI>
}

function click(func:any,route:string,router:AppRouterInstance) {
    if(func)
        func()
    if(route === 'signin'){
        signIn()
    }
    else{
        router.push(route)
    }
}