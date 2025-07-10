import { JWT } from "next-auth/jwt";
import { Next_Auth } from "./nexAuthHandler";
import NextAuth from "next-auth";

const handler = NextAuth(Next_Auth);

export { handler as GET, handler as POST }