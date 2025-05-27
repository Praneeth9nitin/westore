"use server"
import prisma from '@/db';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
})


export async function createUser({userdata}: {userdata: z.infer<typeof schema>}) {

    console.log("userdata", userdata)
    if(!schema.safeParse(userdata).success){
        console.error({sattus:400,msg:"invalid data"})
    }

    try{
        const user = await prisma.user.create({
            data: userdata
        })
        return {user, message: "User created successfully", status: 200} 
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message, status: 500 };
        }
        return { error: "Internal server error", status: 500 };
        }
}

