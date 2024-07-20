import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

//Get Post
export const GET = async () => {
   try {
      const posts = await prisma.post.findMany({
         orderBy:{
            createdAt: "desc"
         },
      });
      // console.log("Posts of news article",posts)
      return NextResponse.json(posts, {status: 200})
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })      
   }
}