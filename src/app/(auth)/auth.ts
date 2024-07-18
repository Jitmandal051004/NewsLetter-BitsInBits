import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/connect"

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prisma),
   secret: process.env.AUTH_SECRET,
   providers: [google],
   pages: {
      signIn: "/sign-in",
   },
   session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
   },
   callbacks: {
      async jwt({token, user}){
         const dbUser = await prisma.user.findFirst({
            where: {
               email: token.email ?? '',
            }
         })
         
         if(!dbUser){
            if(user?.id){
               token.id = user!.id
            }
            return token
         }

         console.log("token callback", {token, user})
         
         return{
            ...token,
            id: dbUser.id,
            name: dbUser.name,
            role: dbUser.role,
            email: dbUser.email,
            picture: dbUser.image,
         };
      },
      async session({session, token}){
         console.log("session callback", {session, token});
         if(token){
            session.user.id = token.id
            session.user.name = token.name
            session.user.role = token.role
            session.user.image = token.picture
         }

         return session
      }
   }
})