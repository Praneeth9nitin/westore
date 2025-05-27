import NextAuth, {  RequestInternal, User } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/db';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async function (credentials: Record<"email" | "password", string> | undefined) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                console.log(user)
                if (!user) {
                    return null;
                }
                return {
                    id: user?.id || "",
                    name: user?.username,
                    email: credentials?.email
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }