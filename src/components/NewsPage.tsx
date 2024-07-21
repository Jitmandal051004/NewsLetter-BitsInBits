import { roboto_slab } from '@/app/fonts';
import Comments from './Comments';
import SinglePImg from './SinglePImg';

type Props = {
   id: string;
   title: string;
   dept: string;
   description: string;
   post: string;
   author: string;
   userId: string;
   ImgId: string;
   slug: string;
}

const page = ({id, title, dept, description, post, author, userId, ImgId, slug}: Props) => {
   const bodyParas = post.split(/<br\s*\/?>/i);
   
   return (
      <div className='newsBox flex flex-col justify-center items-center w-full py-2'>
         <div className='w-[95%] grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-y-20 gap-y-10 mb-8 lg:mb-2 xl:w-[75%]'>
            <div className="title xl:w-[95%] xl:col-span-1 xl:row-span-1 flex flex-col justify-center items-center gap-5">
               <h1 className={`block mt-1 mb-2 up leading-tight font-medium text-zinc-900 underline text-[1.5rem] md:text-[3.75rem] text-wrap text-center ${roboto_slab.className}`}>
                  {title}
               </h1>
               <div className='text-wrap text-center font-normal text-slate-500 text-md mt-1'>
                  {description}
               </div>
               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {dept}
               </div>
            </div>
            <div  className=' xl:col-span-1 xl:row-span-1 flex justify-center overflow-hidden max-h-[550px]'>
               <SinglePImg
                  id={ImgId}
                  width = {750}
                  height={200}
                  className= 'rounded-[1rem]'
               />
            </div>
            <div className="post xl:col-span-2 xl:row-span-1 flex flex-col gap-4 justify-start leading-6">
               {bodyParas.map((bodyPara: string, index:number)=>
                  <p key={index} className='newsBody'>
                     {bodyPara}
                  </p>
               )}
            </div>
         </div>
         <Comments
            postid={id}
         />
      </div>
   )
}

export default page