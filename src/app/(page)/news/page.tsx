'use client'
import { Footer, Loading, Navbar, NewsPage } from '@/components'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

const page = () => {
   const params = useSearchParams();
   const key = params.get('value');

   const parsedKey = key ? parseInt(key as string, 10) : null;

   const {data, status} = useSession();
   const router = useRouter();

   if(status === 'loading'){
      <Loading />
   }

   if(status === 'unauthenticated'){
      router.push("/sign-in")
   }

   return (
      <div className="wrapper gap-12">
         <Navbar />
         <>
            <NewsPage key={parsedKey}/>
         </>
         <Footer />
      </div>
   )
}

export default page