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
}

export const fetchPosts = async ():Promise<postData[]> => {
   // const { searchParams } = new URL(req.url);

   try {
      const posts = await prisma.post.findMany({
         orderBy:{
            createdAt: "desc"
         },
      });
      return posts
   } catch (error) {
      console.log(error);
      // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })      
      throw error
   }
}