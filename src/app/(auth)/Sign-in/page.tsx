"use client"
import { Authpage } from '@/components'
import { signIn } from 'next-auth/react'
// import Image from 'next/image'

const page = () => {
   const handleClick = () => {
      signIn("google")
   }

   return (
      <Authpage
         content='Sign In'
         transfer='Not Signed Up? Click here'
         destination='Sign-up'
         onButtonClick={handleClick}
      />
   )
}

export default page