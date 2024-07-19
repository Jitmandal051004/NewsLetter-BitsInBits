"use client"
import { FailedAuth, Footer, Navbar, PublishPage } from '@/components'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { auth } from '@/app/(auth)/auth'

const page = async ({}) => {
   // const {status, data: session} = useSession();
   // const role = session?.user.role
   // const router = useRouter();


   // if(status === 'unauthenticated'){
   //    router.push("/sign-in")
   // }

   const session = await auth()

   if(!session?.user){
      return <FailedAuth
         img="NoAccess.png"
         text="You have not logged in yet"
         transfer="Go to Login Page"
         destination="sign-in"
      />
   }

   if(session?.user.role !== 'ADMIN'){
      return (
         <FailedAuth
            img="NoAccess.png"
            text="You are not a Publisher."
            transfer="Go to Home Page"
            destination=""
         />
      )
   }

   const Username = ""
   const UserRole = ""
   if(session?.user.name && session?.user.role ){
      const Username = session?.user.name
      const UserRole = session?.user.role 
   }

   return (
      <div className="wrapper gap-12">
         <Navbar 
            user = {true}
            userName = {Username}
            role = {UserRole}
         />
         <div className='flex items-center w-full justify-center'>
            <PublishPage />
         </div>
         <Footer />
      </div>
   )
}

export default page