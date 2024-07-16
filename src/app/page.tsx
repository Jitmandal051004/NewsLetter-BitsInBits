import { Footer, Hero, Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="text-2xl font-bold">
            {/* <h1>Posts</h1>
            <h1>LoadMore</h1> */}
         </div>
         <Footer />
      </>
      
   );
}
