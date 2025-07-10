import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/db';

export const Next_Auth = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<any> {
                
                try{
                    const user = await prisma.user.findUniqueOrThrow({
                        where: {
                            email: credentials?.email
                        },
                        select:{
                            id: true,
                            username: true,
                            email: true,
                            password: true,
                            Folder: true
                        }
                    })
                    console.log(user.Folder)
                    if (user.password !== credentials?.password) 
                        throw new Error("Invalid password");
                    return {
                        id: user.id,
                        name: user?.username,
                        email: credentials?.email,
                        folders: user.Folder
                    }
                }catch (error) {
                    console.error("Error fetching user:", error);
                    return null;
                }

                
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }:any){
            if (user) {
                token.id = user.id;
                console.log(token.id, token.folders);
            }
            return token;
        },
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }):Promise<any> {
            return baseUrl+ '/dashboard';   
        },
        session : async ({ session, token, user } : any) => {
            session.user.id = token.id;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}