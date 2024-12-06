import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const LeftRight = ({mainData, mainTitle ,desc}) => {
  return (
    <section className="px-6  bg-transparent mt-20">
      <div className="container bg-transparent">
        <div className="flex justify-center items-center gap-2 flex-col ">
          <h2 className="text-primary  ">
            {mainTitle}
          </h2>
          <p className="max-w-[800px] text-center">{desc}</p>
        </div>
        {
            mainData.map((item, i) =>(
                item?.imageSide== 'right' ?
                <div key={i} className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2  flex justify-center items-center  ">
                  <Image
                    src={item.image}
                    width={700}
                    height={700}
                    alt="product logo"
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div>
                    <div className="flex gap-3 items-center ms-3">
                    <div className=" w-fit relative">
                        <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1] translate-x-[-18px]  "></div>
                        <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] translate-x-[-9px]"></div>
                        <Image
                          src={item.icon}
                          width={50}
                          height={200}
                          alt="product logo"
                          className="bg-gradient-to-b from-[#DEF4F6] to-[#CBEBFA] p-1 rounded-xl relative z-10 p-1"
                        />
                      </div>
                      <span className="text-card">{item.titles}</span>
                    </div>
                  <p className="py-4">{item.content}</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>:
                <div key={i} className="flex flex-col flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center items-center ">
                  <div>
                    <div className="flex gap-3 items-center ms-3">
                      <div className=" w-fit relative">
                        <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1] translate-x-[-18px]  "></div>
                        <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] translate-x-[-9px]"></div>
                        <Image
                          src={item.icon}
                          width={50}
                          height={200}
                          alt="product logo"
                          className="bg-gradient-to-b from-[#DEF4F6] to-[#CBEBFA] p-1 rounded-xl relative z-10 p-1"
                        />
                      </div>
      
                      <span className="text-card">{item.titles}</span>
                    </div>
                   <p className="py-4"> {item.content}</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center  order-1 md:order-2">
                  <Image
                    src={item.image}
                    width={700}
                    height={700}
                    alt="product logo"
                  />
                </div>
              </div> 
            ))
        }
      </div>
    </section>
  );
};

export default LeftRight;
