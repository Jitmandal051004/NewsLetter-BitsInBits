import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const Get = async (req: Request) => {
   try {
      const posts = await prisma.post.findMany({});
      return NextResponse.json(posts, {status: 200} )
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })      
   }
}