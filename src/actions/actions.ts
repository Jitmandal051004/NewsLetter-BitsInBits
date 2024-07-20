"use server"
import { auth } from "@/app/(auth)/auth"
import prisma from "@/lib/connect"

export const createPost = async (formData: FormData, public_id: string) => {
   const session = await auth()
   console.log(public_id)
   const now = new Date()
   const [hours, minutes, seconds] = [now.getHours(), now.getMinutes(), now.getSeconds()];
   const slug = `${(formData.get("title") as string).toLowerCase().replace(/\s+/g, '-').slice(0, 25)}+${hours}+${minutes}+${seconds}+${(session?.user.id)?.slice(1,4)}`
   try {
      await prisma.post.create({
         data: {
            title: formData.get("title") as string,
            slug: slug,
            dept: formData.get("Department") as string,
            desc: formData.get("desc") as string,
            Body: formData.get("body") as string,
            ImgId: public_id,
            userName: session?.user.name as string,
            userEmail: session?.user.email as string
         }
      })
      console.log("post published ==>", public_id)
   } catch (error) {
      console.log(error)
      throw new Error
   }
}
