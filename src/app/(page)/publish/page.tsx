"use client"
import { FailedAuth, Footer, Navbar, PublishPage } from '@/components'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const page = ({}) => {
   const {status, data: session} = useSession();
   const role = session?.user.role
   const router = useRouter();


   if(status === 'unauthenticated'){
      router.push("/sign-in")
   }

   if(session?.user.role !== 'ADMIN'){
      return (
         <FailedAuth text={"You are not a Publisher."}/>
      )
   }

   return (
      <div className="wrapper gap-12">
         <Navbar />
         <div className='flex items-center w-full justify-center'>
            <PublishPage />
         </div>
         <Footer />
      </div>
   )
}

export default page