import { Inter, Roboto_Slab, DM_Sans } from "next/font/google";

export const inter = Inter({ 
   subsets: ["latin"] 
});

export const roboto_slab = Roboto_Slab({
   weight: "500",
   subsets: ["latin"]
})

export const dm_sans = DM_Sans({
   weight: ["400", "500"],
   subsets: ["latin"]
})