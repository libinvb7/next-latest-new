import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import BlogTag from "./BlogTag";

const RecentBlog = () => {
  return (
    <section>
      <div className="container">
        <div className="flex py-10   items-center flex-col md:flex-row gap-5 lg:gap-0 ">
          <div className=" md:w-1/2 text-center">
            <div className="bg-white p-5 glass-bg w-fit rounded-3xl">
              <Image
                src="/assets/blog/manufacturig-kpi-dahboard.png"
                alt="blogimageone"
                width={600}
                height={200}
              />
            </div>
          </div>
          <div className=" md:w-1/2">
            <div className="flex flex-col gap-5">
           <BlogTag/>
              <h2 className="text-primary text-left text-2xl lg:text-5xl">
                Maximise the Power of SQCDP with Digital Balanced Scorecard
              </h2>
              <p>
                Balanced Scorecard software makes much sense in your operations
                by digitalising your SQDCP board and automatically generating
                data from the chosen metrics.{" "}
              </p>
              <Link href="">
                <button className="flex gap-2 justify-between items-center  text-primary text-base font-semibold hover:scale-[1.05] transition">
                  Continue Reading <MdOutlineArrowOutward />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
