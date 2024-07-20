import { auth } from "@/app/(auth)/auth";
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

interface postData{
   id: string;
   createdAt: Date;
   slug: string;
   title: string;
   dept: string;
   desc: string;
   Body: string;
   imgUrl: string | null;
   views: number;
   likes: number;
   userEmail: string;
   username: string;
}

//Get Post
export const GET = async () => {
   // const { searchParams } = new URL(req.url);

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
      throw error
   }
}