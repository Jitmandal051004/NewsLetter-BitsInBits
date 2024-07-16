import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constants"
import { roboto_slab } from "@/app/fonts"
// import Authproviders from "./Authproviders"

const Navbar = () => {
   const session = null

   return (
      <nav className="flexBetween navbar">
         <div className="flex-1 flexStart gap-10">
            <Link href="/">
               <div className="logo flex gap-3">
                  <Image
                     src="/BitsLogo.png"
                     width={100}
                     height={100}
                     alt = "BITSlogo" 
                  />
                  <Image 
                     src="/logo-transparent.png"
                     width={150}
                     height={100}
                     alt = "BITSinBITS"    
                  />
               </div>
            </Link>
            <ul className= {`xl:flex hidden text-small gap-7 ${roboto_slab.className}`} >
               {NavLinks.map((link)=>(
                  <Link href={link.href} key={link.key}>
                     {link.text}
                  </Link>
               ))}
            </ul>
         </div>

         {/* <div className={`xl:flex flexcenter hidden gap-4 ${roboto_slab.className}`}>
            {session ? (
               <>
                  UserPhoto

                  <Link href="/publish">
                     Publish
                  </Link>
               </>
            ) : (
               <Authproviders />
            )}
         </div> */}
      </nav>
   )
}

export default Navbar