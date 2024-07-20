import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

//Get single post
export const GET = async (req:Request, {params}:any) => {
   const {slug} = params
   
   try {
      const post = await prisma.post.findUnique({
         where: {slug},
      })

      return NextResponse.json(post, {status: 200})

   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })      
   }
}