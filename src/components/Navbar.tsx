"use client";

import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constants"
import { roboto_slab } from "@/app/fonts"
import { signOut,useSession } from "next-auth/react";
import { Button } from "@headlessui/react";

type authentication = {
   user: boolean;
   userName: string;
   role : string;
}

const Navbar = ({user, userName, role}: authentication) => {
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
                  <Link className="p-3 rounded-md hover:bg-[#dde19a] hover:text-zinc-600 font-bold active:text-zinc-400 ease-linear" href={link.href} key={link.key}>
                     {link.text}
                  </Link>
               ))}
            </ul>
         </div>

         <div className={`xl:flex flexcenter hidden gap-3 ${roboto_slab.className} justify-center items-center`}>
            {/* {status === "authenticated" && role === "ADMIN" ? ( */}
            { user && role === "ADMIN" ? (
               <>
                  <span className="text-lg">{userName}</span>
                  <Button className="p-3 rounded-md hover:bg-[#dde19a] font-bold active:text-zinc-500 ease-linear" onClick={() => signOut()}>
                     SignOut
                  </Button>
                  <Link href="/publish" className="font-bold text-lg text-blue-500">Publish</Link>
               </>
            ) : user ? (
               <>
                  <span className="text-lg">{userName}</span>
                  <Button className="py-3 rounded-md hover:bg-[#dde19a] font-bold active:text-zinc-500 ease-linear" onClick={() => signOut()}>
                     SignOut
                  </Button>
                  <Link href="/publish" className="font-bold text-lg text-red-500">Publish</Link>
               </>
            ) : null}
         </div>
      </nav>
   )
}

export default Navbar