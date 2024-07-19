"use client"

import { roboto_slab } from "@/app/fonts"
import { Button } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link";

type LogType = {
   content: string;
   transfer: string;
   destination: string;
   onButtonClick: ()=>void;
}

const Authpage = ({content, transfer, destination, onButtonClick}: LogType) => {
   return (
      <div className='flex justify-center items-center w-screen h-screen overflow-hidden'>
         <div className="flex md:bg-zinc-300 w-[90%] md:w-[45%] xl:w-[35%] rounded-xl ">
            <div className="m-8 w-full flex gap-3 flex-col items-center justify-evenly ">
               <div className="logo flex gap-2 mb-2">
                  <Image
                     src="/BitsLogo.png"
                     width={100}
                     height={100}
                     alt = "BITSlogo"
                     priority = {true}
                  />
                  <Image 
                     src="/logo-transparent.png"
                     width={150}
                     height={100}
                     alt = "BITSinBITS" 
                     priority = {true}   
                  />
               </div>
               <div className="desc w-[90%] text-center mt-2 mb-2 text-pretty">
                  <p className={`${roboto_slab.className} text-[0.78rem]`}>
                     Keeps you update with BITS GOA in Bits size information 
                  </p>
               </div>
               <Button onClick={onButtonClick} className={`h-12 w-[95%] md:w-[80%] xl:w-[75%] mt-2 ${roboto_slab.className} rounded bg-sky-600 py-2 px-4 text-md lg:text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700`}>
                  {content} With GOOGLE
               </Button>
               <Link className= {`${roboto_slab.className} mt-1 text-[0.8rem] flex-wrap`} href = {`/${destination}`}>
                  {transfer}
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Authpage