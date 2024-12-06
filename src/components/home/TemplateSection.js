import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { MdHub } from "react-icons/md";

const TemplateSection = () => {
  return (
    <section className=" mt-20 px-6 pb-10 lg:pb-20 ">
      <div className="container">
        <div className=" p-10  lg:pt-5 lg:p-4   glass-bg custom-shadow">
          <div className="flex flex-col lg:flex-row  text-center items-center justify-center">
            <div className="w-full lg:w-1/2 flex justify-center items-center  flex-col">
              <div>
                <h2 className="text-primary">
                  Get started with
                  <br />
                  Data Point resources
                </h2>
                <Image src="/assets/images/customization-img.png" width={500}  height={200} alt="product logo"/>
              </div>
            </div>
            <div className=" relative w-full lg:w-1/2 P-5 ">
              <div className="relative overflow-hidden p-5 lg:p-10 w-full text-left rounded-lg mb-3 shadow-lg transition duration-300 group cursor-pointer custom-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <PiVideoFill className="text-[#115991] group-hover:text-white text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                    <h3 className="text-[#115991] group-hover:text-white text-md  md:text-2xl font-bold">
                      Experience Data Point Demo
                    </h3>
                  </div>
                  <MdKeyboardArrowRight className="text-[#115991] group-hover:text-white text-3xl" />
                </div> 
              </div>
              <div className="relative overflow-hidden p-5 lg:p-10 w-full text-left rounded-lg mb-3 shadow-lg transition duration-300 group cursor-pointer  custom-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <RiDashboardFill className="text-[#115991] group-hover:text-white text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                    <h3 className="text-[#115991] group-hover:text-white text-md md:text-2xl font-bold">
                      Get Started with Templates
                    </h3>
                  </div>
                  <MdKeyboardArrowRight className="text-[#115991] group-hover:text-white text-3xl" />
                </div>
              </div>

              <div className="relative overflow-hidden p-5 lg:p-10 w-full text-left rounded-lg mb-3 shadow-lg transition duration-300 group cursor-pointer custom-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <MdHub className="text-[#115991] group-hover:text-white text-5xl font-bold bg-white/30 p-1 rounded-lg" />
                    <h3 className="text-[#115991] group-hover:text-white text-md  md:text-2xl font-bold">
                      Explore Knowledge Hub
                    </h3>
                  </div>
                  <MdKeyboardArrowRight className="text-[#115991] group-hover:text-white text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
