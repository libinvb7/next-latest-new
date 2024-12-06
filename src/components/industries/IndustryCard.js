import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { PiArrowUpRightThin } from "react-icons/pi";
import Link from "next/link";


const IndustryCard = ({data}) => {
  const { title, content,icon } = data; 

  return (
    <div className="group industry-card rounded-lg max-w-[350px] md:h-[410px]  relative  flex-col overflow-hidden text-center hover:bg-gradient-to-r hover:scale-105 shadow-lg  w-full text-left rounded-lg mb-3 transition duration-300">
    <div className="relative">
    <Image src={icon} className=" relative z-10 text-center industryCardAfter p-1 rounded-xl" width={500} height={500}  alt="product logo"/>
    <h2 className="text-card text-left absolute  bottom-[20px] z-10 text-white px-4">{title}</h2>
    </div>
    <div className="p-5">
    <p className="font-[500]">{content}</p>
    </div>
   
  </div>
  )
}

export default IndustryCard