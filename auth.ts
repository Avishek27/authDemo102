import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import authConfig from "./auth.config";
import { getUserById } from "./data";
import prisma from "./lib/db";


export const { 
    auth, 
    handlers, 
    signIn, 
    signOut } = NextAuth({
  pages: {
   signIn: "/auth/login",
   error: "/auth/error",
  },
  events: {
   async linkAccount({user}) {
    await prisma.user.update({
      where:{
        id: user.id,
      },
      data: {
        emailVerified: new Date()
      }
    })
   }
  },
  callbacks: {
    async signIn({ user,account }){
      if(account?.provider !== "credentials")return true;
      if(!user.id)return false;
      const existingUser = await getUserById(user.id);
      if(!existingUser?.emailVerified)return true;
      return true;
    },


    async session({session,token}){
     if(session.user && token.sub){
      session.user.id = token.sub;
     }

     if(session.user && token.role){
      session.user.role = token.role;
     }
    return session;
    },
   async jwt({ token }){
    if(!token.sub)return token;
    const existingUser = await getUserById(token.sub);
    if(!existingUser)return token;
    token.role = existingUser.role;
    return token;
   }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt"},
 ...authConfig
})