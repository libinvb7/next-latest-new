import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import FormInput from "./FormInput";


const FormIndustry = ({title, desc}) => {
  return (
    <section className="mt-20">
      <div className="container ">
        <div className=" glass-bg p-5 lg:p-10 ">
          <div className="flex gap-10 lg:gap-20 h-full flex-col  md:flex-row">
            <div className=" p-2 lg:max-w-[500px] bg-gradient-to-r from-[#115991] to-[#1873AC] border-0 p-5 rounded-lg flex justify-center items-center">
              <div className="p-10 p-5">
                <h2 className="text-primary text-white text-left py-5 text-4xl">
                  {title || ""}
                </h2>
                <p className="text-xl text-white pb-4">
                 {desc || ""}</p>
                <Image src="/assets/images/form-img.png"  width={500}  height={200} alt="product logo"/>
              </div>
            </div>
            <div className="w-full lg:p-14">
              <div className="bg-white p-5 rounded-lg glass-bg">
                <h2 className="text-3xl text-[#115991] font-[600] py-10 flex gap-3 items-center">
                  <span className=" border border-[#115991] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
                    <BsFillRocketTakeoffFill />
                  </span>
                  Get Started
                </h2>

                <FormInput/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormIndustry;
