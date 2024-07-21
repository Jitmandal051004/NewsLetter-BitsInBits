import React, { useRef } from 'react'
import CommentForm from './CommentForm'
import prisma from '@/lib/connect'
import CommentBox from './CommentBox'

type postData = {
   postid: string
}

const Comments = async ({postid}:postData) => {
   const comments = await prisma.comment.findMany({
      where: {
         postid: postid
      },
      include: {
         user: true
      }
   })
   console.log(comments)
   return (
      <div className='flex flex-col w-[95%] xl:w-[75%] col-span-full gap-4 mt-6 xl:mt-1'>
         <CommentForm
            postid={postid}
         />
         {comments.map((comment) =>
            <CommentBox
               key={comment?.id} 
               body = {comment?.body}
               id = {comment?.id}
               userEmail= {comment?.userEmail}
               name = {comment?.user.name as string}
               createdAt = {comment?.createdAt}
            />
         )}
      </div>
   )
}

export default Comments