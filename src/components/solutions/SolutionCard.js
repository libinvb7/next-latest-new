import Image from "next/image";

const SolutionCard = ({ data }) => {
  const { title, content, icon, link } = data;
  return (
    <div className="group px-5 relative p-5 lg:p-10 w-full text-left  mb-3 transition duration-300  ">
    <div className=" w-fit relative  transition duration-300 mb-3  z-[99]  ">
    <div className="bg-gradient-to-b from-[#37BDB0]/10 to-[#0097FE]/10 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[1]  transition duration-300"></div>
    <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-xl w-fit absolute left-[0px] top-0 w-full h-full z-[-1] group-hover:translate-x-[10px] transition duration-300"></div>
   
    <Image
      src={icon}
      className="bg-gradient-to-b from-[#d8f2f3] to-[#c3e7fb] p-3  rounded-xl  relative z-10 transition duration-300 ease-in-out group-hover:translate-x-[20px]"
      width={50}
      height={50}
      alt="solution card image"
    />
  </div>
     
      <h2 className="text-card">{title}</h2>
      <div className="flex flex-col items-start pt-3">
        <p>{content}</p>
      </div>
     
    </div>
  );
};

export default SolutionCard;
