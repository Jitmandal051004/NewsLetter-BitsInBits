import { FailedAuth, Footer, Loading, Navbar, NewsCard} from "@/components";
import { tempDataPostcards } from "@/constants";

import { auth } from "./(auth)/auth";

type postData = {
   id: string;
   createdAt: Date;
   slug: string;
   title: string;
   dept: string;
   desc: string;
   Body: string;
   ImgId: string;
   views: number;
   likes: number;
   userEmail: string;
   userName: string;
} 
//Server side Fetching -->
const getPosts = async () => {
   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`,{
      cache: "no-store",
   });
   if(!res.ok){
      throw new Error("Failed");
   }
   return res.json();
}

export default async function Home() {
   //Authentication -->
   const session = await auth()
   if(!session?.user){
      return <FailedAuth
         img="NoAccess.png"
         text="You have not logined yet"
         transfer="Go to Login Page"
         destination="sign-in"
      />
   } 
   //// console.log("Home page consoleLog", session, session?.user, session?.user.name, session?.user.role)
   let Username = ""
   let UserRole = ""
   if(session?.user.name && session?.user.role ){
      Username = session?.user.name
      UserRole = session?.user.role 
   }
   //// console.log(UserRole, Username)

   //fetching data
   const Posts = await getPosts();

   return (
      <div className="wrapper gap-12">
         <Navbar 
            user = {true}
            userName = {Username}
            role = {UserRole}
         />
         <div className="flex flex-col gap-10 mx-2">
            {Posts.map((post : postData) => 
               <NewsCard 
                  key={post?.id}
                  id= {post?.id}
                  title = {post?.title}
                  dept = {post?.dept}
                  description = {post?.desc}
                  post = {post?.Body}
                  author = {(post?.userName).toLowerCase()}
                  userId = {post?.id}
                  ImgId = {post?.ImgId}
                  slug = {post?.slug}
               />
            )}
         </div>
         <Footer />
      </div>
      
   );
}
