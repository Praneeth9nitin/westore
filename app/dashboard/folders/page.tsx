import { Next_Auth } from '@/app/api/auth/[...nextauth]/nexAuthHandler';
import Folders from '@/components/Folders'
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth"


async function page() {
  const prisma = new PrismaClient(); 
  const session = await getServerSession(Next_Auth);
  const userId = session?.user.id;

    const user = await prisma.user.findUnique({
        where:{
          id : userId
        },
        select: {
          Folder : true
        }
      })
    
      if(!user) {
        return ({
            msg: "User not found",
            status: 404
        }
        )
      }
  
  return (
    <div>
      <Folders folders={user.Folder} />
    </div>
  )
}

export default page
