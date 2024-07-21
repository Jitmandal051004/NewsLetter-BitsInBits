"use client"

import { CldImage } from "next-cloudinary"

type id = {
   id : string
   width: number
   height: number
   className: string
}

const SinglePImg = ({id, width, height, className}:id) => {
   console.log("aklsdjfklasdjfklsdjaklf;jasdkljgkdsjfkl;sjdkl;fj",className)
   return (
      <div>
         {id && (
            <CldImage 
               src ={id}
               width={width}
               height={height}
               alt='newsImg'
               className= {className}
               sizes='100vw'
            />
         )}
      </div>
   )
}

export default SinglePImg