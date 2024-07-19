// 'use client'
import { auth } from '@/app/(auth)/auth'
import { FailedAuth, Footer, Loading, Navbar, NewsPage } from '@/components'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

const page = async () => {
   // const params = useSearchParams();
   // const key = params.get('value');

   // const parsedKey = key ? parseInt(key as string, 10) : null;

   // const {data, status} = useSession();
   // const router = useRouter();

   // if(status === 'loading'){
   //    <Loading />
   // }

   // if(status === 'unauthenticated'){
   //    router.push("/sign-in")
   // }

   const session = await auth()
   if(!session?.user){
      return <FailedAuth
         img="NoAccess.png"
         text="You have not logined yet"
         transfer="Go to Login Page"
         destination="sign-in"
      />
   } 

   let Username = ""
   let UserRole = ""
   if(session?.user.name && session?.user.role ){
      Username = session?.user.name
      UserRole = session?.user.role 
   }

   return (
      <div className="wrapper gap-12">
         <Navbar 
            user = {true}
            userName = {Username}
            role = {UserRole}
         />
         <>
            <NewsPage key="1"/>
         </>
         <Footer />
      </div>
   )
}

export default page