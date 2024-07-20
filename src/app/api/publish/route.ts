"use server"
import { auth } from "@/app/(auth)/auth";
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";


// export const POST = async () => {
//    const session = await auth()

//    if(!session?.user || session?.user.role !== 'ADMIN'){
//       return NextResponse.json({message: "Not Authenticated!"},{status: 401})
//    }

//    try {
//       const post = await prisma.post.createMany({
//          data: [
//             // {
//             //    "slug": "1",
//             //    "imgUrl": "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             //    "title": "Lorem Ipsum Dolor Sit Amet",
//             //    "dept": "Development Society, Bits Goa",
//             //    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis lectus sit amet risus pretium, id dapibus justo feugiat. Ut eu odio vestibulum, consequat justo eu, fermentum libero.",
//             //    "Body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis lectus sit amet risus pretium, id dapibus justo feugiat. Ut eu odio vestibulum, consequat justo eu, fermentum libero. Quisque sit amet risus nec purus laoreet ultrices. Fusce in consectetur metus, vitae finibus libero. Proin elementum leo id ex ullamcorper vestibulum. Mauris vel vestibulum ante. Phasellus convallis risus ac mi feugiat, nec vestibulum ex ullamcorper. Integer auctor vitae velit non finibus. Fusce vitae leo ante.",
//             //    "userName": "INDRAJIT Mandal",
//             //    "userEmail": "jit.mandal24@gmail.com"
//             // },
//             // {
//             //    "slug": "2",
//             //    "imgUrl": "https://example.com/news-image2.jpg",
//             //    "title": "Sed Eget Elit Ut Diam",
//             //    "dept": "Development Society, Bits Goa",
//             //    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed consequat nunc. Proin et quam eget arcu facilisis venenatis. Nullam cursus diam et est aliquam lacinia.",
//             //    "Body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi non nibh et risus pharetra ultricies. Ut posuere justo in libero fermentum, vitae egestas dui vehicula. Suspendisse tincidunt nisi nec augue auctor vestibulum. Nullam vitae sodales velit. Donec ac orci in odio fermentum malesuada non at nisl. Suspendisse eu libero id justo interdum lobortis. Sed eget elit ut diam venenatis gravida ut ut nisi. Donec vel massa pretium, placerat nulla sit amet, tincidunt tellus.",
//             //    "userName": "INDRAJIT Mandal",
//             //    "userEmail": "jit.mandal24@gmail.com"
//             // },
//             // {
//             //    "slug": "3",
//             //    "imgUrl": "https://example.com/news-image3.jpg",
//             //    "title": "Pellentesque Posuere Diam Tellus",
//             //    "dept": "Development Society, Bits Goa",
//             //    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec sapien eget arcu auctor vehicula vitae a tortor. Sed eget velit at risus tristique semper.",
//             //    "Body": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet mi vitae quam hendrerit hendrerit in a est. Curabitur condimentum orci et eros condimentum venenatis. Morbi nec tellus risus. Curabitur maximus, quam et consequat condimentum, arcu sem fermentum libero, non fringilla nisi lorem ac odio. Proin eget nisl accumsan, sollicitudin tortor eu, ultricies nunc. Pellentesque posuere diam tellus, id vehicula eros sollicitudin sed. Ut pellentesque, libero in molestie vestibulum, lacus enim luctus orci, at volutpat nulla elit id odio.",
//             //    "userName": "INDRAJIT Mandal",
//             //    "userEmail": "jit.mandal24@gmail.com"
//             // },
//             // {
//             //    "slug": "4",
//             //    "imgUrl": "https://example.com/news-image4.jpg",
//             //    "title": "Integer Vel Sapien Eget Risus",
//             //    "dept": "Development Society, Bits Goa",
//             //    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum neque quis ex lobortis, eu mattis metus congue. Etiam scelerisque sapien nec lectus efficitur, quis tempus nulla scelerisque.",
//             //    "Body": "Integer vel sapien eget risus vehicula tristique. Donec bibendum eros nec erat egestas, eget suscipit nisi eleifend. Duis condimentum nisi at quam lobortis, ac hendrerit leo consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at erat vitae ligula fermentum dictum. Integer at purus a nisi molestie tempus. Nulla sit amet elit sit amet nisi commodo laoreet nec sed purus.",
//             //    "userName": "INDRAJIT Mandal",
//             //    "userEmail": "jit.mandal24@gmail.com"
//             // },
//             // {
//             //    "slug": "5",
//             //    "imgUrl": "https://example.com/news-image5.jpg",
//             //    "title": "Fusce Ac Purus Non Nisl Tincidunt",
//             //    "dept": "Development Society, Bits Goa",
//             //    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia orci in leo interdum, sed ullamcorper ex malesuada. Donec ultricies lacus a risus molestie luctus.",
//             //    "Body": "Fusce ac purus non nisl tincidunt finibus. In hac habitasse platea dictumst. Ut vel condimentum mi. Vestibulum tempus varius magna, sit amet vestibulum est pharetra eget. Ut tincidunt dolor sit amet tellus volutpat, id mattis magna accumsan. Nulla facilisi. Pellentesque at leo in enim facilisis condimentum. Integer congue metus quis elit feugiat, id laoreet ligula interdum. Nam interdum nec ligula nec suscipit. Sed et posuere ligula.",
//             //    "userName": "INDRAJIT Mandal",
//             //    "userEmail": "jit.mandal24@gmail.com",
//             // }
//          ],

//       })

//       console.log("created it safely", post)
//       return NextResponse.json({message: "We posted it safely"},{status:200})
//    } catch (error) {
//       console.log(error);
//       return NextResponse.json({message: "Something went wrong!"},{status: 500})
//    }
// }
//function to create unique slug
// function generateSlug(title:any) {
//    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 200);
// }
// async function generateUniqueSlug(slug:any, count = 0) {
//    let newSlug = count === 0 ? slug : `${slug}-${count}`;
//    const existingPost = await prisma.post.findUnique({ where: { slug: newSlug } });
//    if (existingPost) {
//       return generateUniqueSlug(slug, count + 1);
//    }
//    return newSlug;
// }

export async function createPost(formData: FormData){
   const session = await auth()

   if(!session?.user || session?.user.role !== 'ADMIN'){
      return NextResponse.json({message: "Not Authenticated!"},{status: 401})
   }
   if(!formData.get("title") || !formData.get("Department") || !formData.get("desc") || formData.get("body")){
      return NextResponse.json({message: "Please provide all the content"},{status: 401})
   }

   let name = ""
   let email = ""
   if(session?.user.name && session?.user.email){
      name = session?.user.name
      email =  session?.user.email
   }
   
   // let slug = generateSlug(formData.get("title") as string);
   const now = new Date()
   const [hours, minutes, seconds] = [now.getHours(), now.getMinutes(), now.getSeconds()];
   const slug = `${(formData.get("title") as string).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 25)}+${(session?.user.id).slice(2,4)}+${hours}+${minutes}+${seconds}`
   console.log("slug:", slug)
   try {
      const post = await prisma.post.create({
         data: {
            title: formData.get("title") as string,
            slug: slug as string,
            dept: formData.get("Department") as string,
            desc: formData.get("desc") as string,
            Body: formData.get("body") as string,
            userName: name,
            userEmail: email
         }
      })
      console.log("post in publishing ==>", post.createdAt)
      return NextResponse.json({message: "We posted it safely"},{status:200})
   } catch (error) {
      console.log(error);
      return NextResponse.json({message: "Something went wrong!"},{status: 500})
   }
}