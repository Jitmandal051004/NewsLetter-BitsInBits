'use client'
import { CldUploadButton } from 'next-cloudinary'
import React from 'react'

const ImgUploadButton = () => {
   return (
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
         <div className="text-center">
            {/* <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" /> */}
            <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
               {/* <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
               >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
               </label> */}
               {/* <p className="pl-1">or drag and drop</p> */}
               <CldUploadButton
                  uploadPreset="<Upload Preset>"
                  onSuccess={(results)=>{
                     console.log(results)
                  }}
                  className='rounded-md bg-indigo-600 px-3 py-[0.7rem] mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-red-300'
               />
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
         </div>
      </div>
   )
}

export default ImgUploadButton