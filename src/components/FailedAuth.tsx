import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type content = {
   img: string;
   text: string;
   transfer: string;
   destination: string;
}

const FailedAuth = ({img, text, transfer, destination}: content) => {
   return (
      <div className='flex justify-center items-center h-screen w-full'>
            <div className={`w-[30%] py-4 flex flex-col justify-center items-center gap-2 ${roboto_slab.className}`}>
               <Image
                     src={`/${img}`}
                     width={100}
                     height={100}
                     alt = "BITSlogo"
                     priority = {true}
                     className='mb-3'
               />
               <p className={`text-xl border-b-2 border-black font-bold leading-relaxed`}>{text}</p>
               <div className='flex justify-center flex-col items-center mt-3 gap-1'>
                  <Link className= {`my-1 flex-wrap text-lg text-blue-700 border-b-2 border-blue-400 hover:text-blue-300 hover:border-blue-200`} href = {`/${destination}`}>
                     {transfer}
                  </Link>
                  <p>OR</p>
                  <p>Please, contact Devsoc</p>
               </div>
            </div>
      </div>
   )
}

export default FailedAuth