"use client"
import { Authpage, Loading } from '@/components'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {
   const {data, status} = useSession();
   const router = useRouter();

   if(status === 'loading'){
      <Loading />
   }

   if(status === 'authenticated'){
      router.push("/")
   }

   return (
      <Authpage
         content='Sign In'
         transfer='Not Signed Up? Click here'
         destination='sign-up'
         onButtonClick={() => signIn("google", { redirectTo: "/" })}
      />
   )
}

export default page