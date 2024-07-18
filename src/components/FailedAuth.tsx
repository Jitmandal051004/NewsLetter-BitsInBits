import { roboto_slab } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const FailedAuth = ({text}:any) => {
   return (
      <div className='flex justify-center items-center h-screen w-full'>
            <div className={`w-[30%] py-4 flex flex-col justify-center items-center gap-2 ${roboto_slab.className}`}>
               <Image
                     src="/FailedAuth.png"
                     width={100}
                     height={100}
                     alt = "BITSlogo"
                     priority = {true}
                     className='mb-3'
               />
               <p className='text-xl'>{text}</p>
               <p>Please, contact Devsoc</p>
            </div>
      </div>
   )
}

export default FailedAuth