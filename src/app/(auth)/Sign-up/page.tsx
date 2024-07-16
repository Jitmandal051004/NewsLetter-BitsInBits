"use client"

import { Authpage } from '@/components'
import { signIn } from 'next-auth/react'

const page = () => {
   const handleClick = () => {
      signIn("google")
   }

   return (
      <Authpage
         content='Sign Up'
         transfer='Already Signed Up? Click here'
         destination='Sign-in'
         onButtonClick={handleClick}
      />
   )
}

export default page