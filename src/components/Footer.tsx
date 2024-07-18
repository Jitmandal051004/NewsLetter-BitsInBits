import { dm_sans } from '@/app/fonts'
import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';

type ColumnProps = {
   title: string;
   links: Array<string>;
}

const FooterColumn = ({title, links} : ColumnProps) => (
   <div className={`footer_column ${dm_sans.className} text-lg`} >
      <h4 className='font-semibold'>{title}</h4>
      <ul className="flex flex-col gap-2 font-normal text-xs">
         {links.map((link) => <Link className='inline' href="/" key={link}>
            <span>
               {link}
            </span>
         </Link>)}
      </ul>
   </div>
)

const Footer = () => {
   return (
      <footer className='flexStart footer'>
         <div className="flex flex-col gap-12 w-full bg-[#dde19a] ">
            <div className="flex items-start flex-col">
               <Image
                  src="/FooterLogo.png"
                  height={100}
                  width={150}
                  alt="BITSinBITS"
               />
               <p className="text-start text-sm font-normal mt-5 max-w-sm">
               BITSinBITS keeps you updated with Bits Goa's cutting-edge research, student achievements, faculty innovations, Alumni Meets, Clubs and CSA activity.
               </p>
            </div>
            <div className="flex flex-wrap gap-12">
               <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
            
               <div className="flex-1 flex flex-col gap-4">
                  <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>      
               </div>

               <div className="flex-1 flex flex-col gap-4">
                  <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>      
               </div>
            </div>
         </div>

         <div className={`footer_copyright ${dm_sans.className}`}>
            <p>@ 2024 IndrajitMandal. All Rights reserved</p>
         </div>
      </footer>
   )
}

export default Footer