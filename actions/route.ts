"use server"
import prisma from '@/db';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(3,{message:"invalid username"}).max(20),
    email: z.string().email({message:"invalid email"}),
    password: z.string().min(8,{message:"min 8 char allowed"}).max(20,{message:"max 20 char allowed"}),
})


export async function createUser({userdata}: {userdata: z.infer<typeof schema>}) {

    console.log("userdata", userdata)
    
    try{
        if(!schema.safeParse(userdata).success){
            const errors = schema.safeParse(userdata).error?.issues
            throw errors;
        }
        const user = await prisma.user.create({
            data: userdata
        })
        return {user, message: "User created successfully", status: 200} 
    }
    catch (error) {
        return {error, message: "Error creating user", status: 500, }
        }
}

