import Link from "next/link";
import React from "react";

const BlogSidebar = () => {
  return (
    <div className="glass-bg p-10 sticky top-28">
      <div className="">
        <h2 className="text-primary text-left text-xl pb-5 ">Blogs</h2>
       <div className="flex gap-3 flex-col">
       <Link href="" >
       <p className="text-[#0F79C0] underline">Huddle Boards</p>
       </Link>
       <Link href="" >
       <p className="">Fishbone Diagram</p>
       </Link>
       <Link href="" >
       <p className="">A3 Problem Solving</p>
       </Link>
       <Link href="" >
       <p className="">Quad Charts</p>
       </Link>
       <Link href="" >
       <p className="">Strategic Planning</p>
       </Link>
       <Link href="" >
       <p className="">Gemba</p>
       </Link>
       <Link href="" >
       <p className="">OKR</p>
       </Link>
       <Link href="" >
       <p className="">Continuous Improvement</p>
       </Link>
       <Link href="" >
       <p className="">DMAIC</p>
       </Link>
       <Link href="" >
       <p className="">KPIs</p>
       </Link>
       </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
