// 'use client'
import { auth } from "@/app/(auth)/auth";
import { FailedAuth, Footer, Loading, Navbar, NewsCard} from "@/components";
import { tempDataPostcards } from "@/constants";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// const getData = 

export default async function Home() {
   // const {data: session, status} = useSession();
   // const router = useRouter();

   // if(status === 'unauthenticated'){
   //    router.push("/sign-in")
   // }

   // if(session?.user.role !== 'ADMIN'){
   //    return (
   //       <FailedAuth
   //          img="NoAccess.png"
   //          text="You have not logged in yet"
   //          transfer="Go to Login Page"
   //          destination="sign-in"
   //       />
   //    )
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
