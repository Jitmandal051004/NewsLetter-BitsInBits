'use client'
import { Footer, Loading, Navbar, NewsCard} from "@/components";
import { tempDataPostcards } from "@/constants";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// const getData = 

export default function Home() {
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
         <div className="flex flex-col gap-10 mx-2">
            {tempDataPostcards.map((data) => 
               <NewsCard 
                  key={data?.id}
                  id= {data?.id}
                  imageUrl = {data?.imageUrl}
                  title = {data?.title}
                  dept = {data?.dept}
                  description = {data?.description}
                  post = {data?.post}
                  author = {data?.author}
                  userId = {data?.userId}
               />
            )}
         </div>
         <Footer />
      </div>
      
   );
}
