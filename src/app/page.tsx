// 'use client'
import { FailedAuth, Footer, Loading, Navbar, NewsCard} from "@/components";
import { tempDataPostcards } from "@/constants";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPosts } from "./api/posts/route";
import { auth } from "./(auth)/auth";

interface postData{
   id: string;
   createdAt: Date;
   slug: string;
   title: string;
   dept: string;
   desc: string;
   Body: string;
   imgUrl: string | null;
   views: number;
   likes: number;
   userEmail: string;
} 

export default async function Home() {
   // const {data, status} = useSession();
   // const router = useRouter();

   // if(status === 'loading'){
   //    <Loading />
   // }

   // if(status === 'unauthenticated'){
   //    router.push("/sign-in")
   // }

   // const [posts, setPosts] = useState<postData[]>([]);

   // useEffect(() => {
   //    const getPosts = async () => {
   //       try {
   //          const fetchedPosts = await fetchPosts();
   //          setPosts(fetchedPosts)
   //       } catch (error) {
            
   //       }
   //    }
   //    getPosts()
   // }, []);
   
   // console.log('Posts', posts)

   const session = await auth()
   if(!session?.user){
      return <FailedAuth
         img="NoAccess.png"
         text="You have not logined yet"
         transfer="Go to Login Page"
         destination="sign-in"
      />
   } 

   // console.log("Home page consoleLog", session, session?.user, session?.user.name, session?.user.role)

   let Username = ""
   let UserRole = ""
   if(session?.user.name && session?.user.role ){
      Username = session?.user.name
      UserRole = session?.user.role 
   }

   // console.log(UserRole, Username)

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
