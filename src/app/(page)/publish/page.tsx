import { FailedAuth, Footer, Navbar, PublishPage } from '@/components'
import { auth } from '@/app/(auth)/auth'

//creating data
// const createPost = async () => {
//    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/publish`,{
//       cache: "no-store"
//    });
//    if(!res.ok){
//       throw new Error("Failed");
//    }

//    return res.json();
// }

const page = async ({}) => {
   //Authentication -->
   const session = await auth()

   if(!session?.user){
      return <FailedAuth
         img="NoAccess.png"
         text="You have not logged in yet"
         transfer="Go to Login Page"
         destination="sign-in"
      />
   }

   if(session?.user.role !== 'ADMIN'){
      return (
         <FailedAuth
            img="NoAccess.png"
            text="You are not a Publisher."
            transfer="Go to Home Page"
            destination=""
         />
      )
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
         <div className='flex items-center w-full justify-center'>
            <PublishPage />
         </div>
         <Footer />
      </div>
   )
}

export default page