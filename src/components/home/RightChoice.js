import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const RightChoice = () => {
  return (
    <section className="px-6  bg-transparent mt-20">
      <div className="container bg-transparent">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
            Why is Data Point Balanced Scorecard the right choice for you?
          </h2>
        </div>
        {/* first section */}
        <div className="flex flex-col flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center ms-3">
                <div className=" w-fit relative">
                  <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1] translate-x-[-18px]  "></div>
                  <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] translate-x-[-9px]"></div>
                  <Image
                    src="/assets/images/icons/bx_customize.png"
                    width={50}
                    height={200}
                    alt="product logo"
                    className="bg-gradient-to-b from-[#DEF4F6] to-[#CBEBFA] p-1 rounded-xl relative z-10"
                  />
                </div>

                <span className="text-card">Customisation</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Customisable dashboards to meet your unique organisational
                  needs.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>
                  Configure dashboards, reports, and visualisations for your
                  specific KPI focus.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Align metrics and features with your business objectives for
                  optimal performance tracking. 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 order-1 md:order-2">
            <Image
              src="/assets/images/customization-img.png"
              width={700}
              height={700}
              alt="product logo"
            />
          </div>
        </div>
        {/* first section */}
        {/* second section */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 ">
            <Image
              src="/assets/images/customization-img.png"
              width={700}
              height={700}
              alt="product logo"
            />
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center ms-3">
              <div className=" w-fit relative">
                  <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1] translate-x-[-18px]  "></div>
                  <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] translate-x-[-9px]"></div>
                  <Image
                    src="/assets/images/icons/fi_integration.png"
                    width={50}
                    height={200}
                    alt="product logo"
                    className="bg-gradient-to-b from-[#DEF4F6] to-[#CBEBFA] p-1 rounded-xl relative z-10"
                  />
                </div>
                <span className="text-card">Integrations</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Seamlessly integrates with ERP, MES, and other enterprise
                  systems.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Automatic data flow across departments, centralising all
                  relevant information.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Breaks down data silos for a holistic view of organisational
                  performance. 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
        {/* second section */}
        {/* third section */}

        <div className="flex flex-col flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center ms-3">
              <div className=" w-fit relative">
                  <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1] translate-x-[-18px]  "></div>
                  <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] translate-x-[-9px]"></div>
                  <Image
                    src="/assets/images/icons/hx_security.png"
                    width={50}
                    height={200}
                    alt="product logo"
                    className="bg-gradient-to-b from-[#DEF4F6] to-[#CBEBFA] p-1 rounded-xl relative z-10"
                  />
                </div>
                <span className="text-card">Security</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Top-tier encryption protocols and secure data storage ensuring
                  data protection. 
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Role-based access controls to manage who can view and edit
                  sensitive information.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                    <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold " />
                  </div>{" "}
                  Regular system audits and strict privacy measures to maintain
                  the highest level of security 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 order-1 md:order-2">
            <Image
              src="/assets/images/customization-img.png"
              width={700}
              height={700}
              alt="customization image"
            />
          </div>
        </div>
        {/* third section */}
      </div>
    </section>
  );
};

export default RightChoice;
