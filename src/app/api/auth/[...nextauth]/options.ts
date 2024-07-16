import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
   ],
   callbacks: {
      async jwt({ token, user}) {
         if(user){
            token._id = user._id?.toString();
            token.isVerified = user.isVerified;
            // token.isAcceptingMessages = user.isAcceptingMessages;
            token.username = user.username;
         }
         return token
      },
      async session({ session, token }) {
         if(token){
            session.user._id = token._id
            session.user.isVerified = token.isVerified
            session.user.isAcceptingMessages = token.isAcceptingMessages
            session.user.username = token.username
         }
         return session
      }
   },
   pages: {
      signIn: '/sign-in'
   },
   session: {
      strategy: "jwt"
   },
   secret: process.env.NEXTAUTH_SECRET,

}