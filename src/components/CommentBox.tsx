import { roboto_slab } from '@/app/fonts'
import React from 'react'

type commentData = {
   body: string
   userEmail: string
   name: string
   id: string
   createdAt: Date
}

const CommentBox = ({body, userEmail, name, id, createdAt}:commentData) => {
   const now = new Date();
   const differenceInMillis = now.getTime() - createdAt.getTime();
   const differenceInHours = Math.floor(differenceInMillis / (1000 * 60 * 60));
   const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));

   console.log(now, createdAt, differenceInHours, differenceInMillis)
   return (
      <div className="w-full flex flex-col items-center justify-center mx-auto bg-[#FDE49E] rounded-xl shadow-lg overflow-hidden">
         <div className='w-[95%] mt-2 leading-5 mb-3 flex justify-between py-2 border-b-2 border-zinc-400'>
            <span className='font-semibold'>
               {name} ({userEmail})
            </span>
            <span className='text-sm flex items-center'>
               {differenceInHours}h {differenceInMinutes}mins ago
            </span>
         </div>   
         <div className={`${roboto_slab.className} w-[95%] leading-5 mb-4`} >
            {body}
         </div>
      </div>
   )
}

export default CommentBox