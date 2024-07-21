"use client"
import { createComment } from '@/actions/actions';
import React, { useRef } from 'react'
import FormSaveBtn from './FormSaveBtn';

type postData = {
   postid: string
}

const CommentForm = ({postid}:postData) => {
   const refer = useRef<HTMLFormElement>(null);

   return (
      <form 
         ref={refer}
         className="w-full border-y-2 py-3 border-zinc-600"
         action={async formData => {
            refer.current?.reset() 
            await createComment(formData, postid);
         }}
      >
         <label htmlFor="body" className="block text-lg font-medium leading-6 text-gray-900">
            Comments
         </label>
         <div className="mt-2">
            <textarea
               id="body"
               name="body"
               rows={3}
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-auto pl-1.5"
               defaultValue={''}
               required
            />
         </div>
         <p className="mt-3 flex gap-y-3 justify-end text-md leading-6 text-red-400">
            <FormSaveBtn />
         </p>
      </form>
   )
}

export default CommentForm