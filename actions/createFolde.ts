"use server";
import prisma from "@/db";

export async function createFolder({ folderName, userId } : {folderName : string, userId: string}) {

    if (folderName === "") {
        return {
            error: "Folder name cannot be empty",
            status: 400
        }
    }
    
    try{

        const user = await prisma.user.findUnique({
            where:{
                id : userId
            },
            select: {
                id: true
            }
        })
        console.log(user)

    if (!user) {
        return {
            error: "User not found",
            status: 404}
    }
    
    const folder  = await prisma.folder.create({
        data: {
            name : folderName,
            userId : user.id
        },
    })

    console.log(folder)
    
    return {
        folder,
        message: "Folder created successfully",
        status: 200
    }
    }catch (error) {
        console.log(error)
    }

    
}