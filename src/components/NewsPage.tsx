import { Footer, Navbar } from '@/components'
import Image from 'next/image'
import { tempDataPostcards } from "@/constants";
import { roboto_slab } from '@/app/fonts';

const page = (key:any) => {
   if (key === null || (key) < 0 || (key) >= tempDataPostcards.length) {
      return <div>Error: Invalid index</div>;
   }

   const data = tempDataPostcards[key]

   return (
      <div className='newsBox flex justify-center items-center w-full py-2'>
         <div className='w-[95%] grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-y-20 xl:w-[75%]'>
            <div className="title xl:w-[95%] xl:col-span-1 xl:row-span-1 flex flex-col justify-center items-center gap-5">
               <h1 className={`block mt-1 mb-2 up leading-tight font-medium text-zinc-900 underline text-[1.5rem] md:text-[3.75rem] text-wrap text-center ${roboto_slab.className}`}>
                  {/* temp - title*/}
                  Lorem Ipsum Dolor Sit Amet
               </h1>
               <div className='text-wrap text-center font-normal text-slate-500 text-md mt-1'>
                  {/* temp - description*/}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis lectus sit amet risus pretium, id dapibus justo feugiat. Ut eu odio vestibulum, consequat justo eu, fermentum libero.
               </div>
               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {/* temp - dept*/}
                  Development Society, Bits Goa
               </div>
            </div>
            <div className=' xl:col-span-1 xl:row-span-1 flex justify-center overflow-hidden '>
               <Image 
                  src ='/news.avif'
                  width={750}
                  height={200}
                  alt='newsImg'
                  className='rounded-[1rem]'
               />
            </div>
            <div className="post xl:col-span-2 xl:row-span-1 flex flex-col gap-4 justify-start leading-6">
               <p className='tracking-wide'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lorem in diam sodales gravida. Quisque accumsan sed urna eget tristique. Donec nec nibh vestibulum leo dictum ultricies at et diam. Mauris vel diam at neque iaculis fringilla. Praesent a leo vitae arcu gravida mattis sit amet at ex. Aenean vel lorem eget dolor tincidunt tempor viverra vitae quam. Donec in facilisis ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sit amet magna malesuada, mollis tortor in, fermentum sapien. Proin porttitor mi quis nibh fringilla volutpat. Fusce nulla diam, dapibus bibendum commodo vel, scelerisque quis libero. Proin aliquet, ipsum eu accumsan consectetur, risus enim suscipit quam, ac suscipit mauris nibh sit amet ante. Vestibulum tincidunt, eros eu dictum egestas, tortor augue rutrum orci, nec egestas dui diam a est. Cras eu malesuada mi, eget posuere nibh. Suspendisse condimentum tincidunt justo, non posuere ex pellentesque sed. Mauris fermentum vehicula blandit.
               </p>
               <p className='tracking-wide'>
                  Morbi at commodo lectus, vel mattis risus. Maecenas commodo, nisl in interdum dignissim, tortor erat suscipit diam, non pellentesque arcu ex vel orci. Mauris consequat, ligula et consequat venenatis, purus est euismod lectus, nec consequat velit sem eu elit. Sed rhoncus diam sed enim ullamcorper tempor. Ut quis nisi eu sapien gravida egestas. In et ultricies neque, et volutpat libero. Praesent tincidunt vestibulum est sed venenatis. Praesent hendrerit augue eget blandit venenatis. Ut pharetra metus ac elit facilisis, sagittis suscipit augue gravida. Suspendisse vitae feugiat lectus. Pellentesque scelerisque eu eros vel vehicula. Duis nibh magna, pellentesque eget tortor ut, facilisis maximus nunc. Aliquam erat volutpat.
               </p>
               <p className='tracking-wide'>
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id molestie risus, vitae sodales tortor. Aliquam ut rutrum sapien. Nam sed felis non diam sagittis malesuada eu dictum sem. Cras posuere metus eget sem scelerisque, sed malesuada nunc imperdiet. Praesent dolor dui, facilisis vel pulvinar nec, ultrices ut neque. Integer neque orci, sollicitudin in vestibulum id, dictum eu ante. Morbi quis lobortis metus. Quisque at ornare nunc. Nullam pulvinar odio eget finibus malesuada. Sed bibendum id lacus ut consequat. Sed pellentesque est non nunc hendrerit, ac convallis risus commodo. Phasellus enim dui, bibendum eu ipsum non, porta fermentum erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
               </p>
            </div>
         </div>
      </div>
   )
}

export default page