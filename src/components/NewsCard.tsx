import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
   id: string;
   imageUrl: string;
   title: string;
   dept: string;
   description: string;
   post: string;
   author: string;
   userId: string;
}

const NewsCard = ({id, imageUrl, title, dept, description, post, author, userId}: Props) => {
   return (
      <div key={id}>
         <div className="max-w-md mx-auto bg-[#FDE49E] rounded-xl shadow-lg overflow-hidden md:max-w-[88%]">
            <div className="md:flex">
               <div className="md:shrink-0">
                  <Image
                     className="h-48 w-full object-cover md:h-full md:w-48" 
                     src="/news.avif" 
                     width={192}
                     height={100}
                     alt="Modern building architecture" 
                  />
               </div>
               <div className="p-8 text-balance">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-3 md:mb-1">{dept}</div>
                  <Link href={`/news?value=${encodeURIComponent(id)}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline hover:text-zinc-700">{title}</Link>
                  <p className="mt-2 text-slate-500">{description}</p>
                  <div className='mt-2 text-zinc-800 text-sm'>Written by - <span>{author}</span></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewsCard