// 'use client'
import { auth } from '@/app/(auth)/auth'
import { FailedAuth, Footer, Loading, Navbar, NewsPage } from '@/components'

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

const getSinglePost = async (slug:{slug:string}) => {
   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`,{
      cache: "no-store",
   });
   if(!res.ok){
      throw new Error("Failed");
   }
   return res.json();
}

const page = async ({params}:any) => {
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

   const { slug } = params;
   const post = await getSinglePost(slug)

   return (
      <div className="wrapper gap-12">
         <Navbar 
            user = {true}
            userName = {Username}
            role = {UserRole}
         />
         <>
            <NewsPage
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
         </>
         <Footer />
      </div>
   )
}

export default page