import NextAuth from "next-auth"; 
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/db";
import bcrypt from "bcryptjs";

export const {auth, signIn, signOut, handlers} = NextAuth({
    providers: [Credentials({
        authorize: async(credentials)=> {
            const user = await prisma.user.findUnique({where: {email: credentials.email as string }})
            if(!user){
                return null
            }
            const isValid = await bcrypt.compare(credentials.password as string, user.password)
            if(!isValid){
                return null
            }
            return {...user, id: String(user.id)}
    }})],
    pages:{
        signIn: '/login'
    },
        callbacks:{
            authorized({auth}){
                    return !!auth?.user
            },
            session({ session, token }) {
            session.user.id = token.sub!
            return session
        }
    }
})