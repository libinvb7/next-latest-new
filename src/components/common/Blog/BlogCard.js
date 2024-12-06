import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BlogTag from "./BlogTag";

const BlogCard = () => {
  return (
   <Link href="/" >
    <div className="industry-card rounded-lg max-w-[350px]   p-3 relative mb-3  group">
        <Image src="/assets/blog/manufacturig-kpi-dahboard.png" alt="blogimageone"  width={400}  height={200}/>
        <BlogTag/>
      <h2 className="text-card pt-3">Manufacturing KPI Dashboards: Best Practices for Visualising Performance</h2>
      <button className="flex justify-between items-center pt-5 w-full ">
        <div>
            <span className="bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] bg-clip-text text-transparent font-bold">Read More</span>
        </div>
        <div className=" w-fit relative  transition duration-300 mb-3  z-[99]  bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] rounded-full">
                <div className="bg-gradient-to-b from-[#37C1F1]/30 to-[#37BDB0]/30 p-1 px-3 rounded-full w-fit absolute left-[0px] top-0 w-full h-full z-[1] group-hover:translate-x-[-7px]  transition duration-300"></div>
                <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-full w-fit absolute left-[0px] top-0 w-full h-full z-[-1] group-hover:translate-x-[-14px] transition duration-300"></div>

                <FaArrowRight className="text-white font-bold text-2xl p-1" />
              </div>
      </button>
     
    </div>
    </Link>
  )
}

export default BlogCard