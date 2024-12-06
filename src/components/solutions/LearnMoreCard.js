import Image from "next/image";
import Link from "next/link";

const LearnMoreCard = ({ data }) => {
  const { title, link } = data;
  return (
    <Link href={link || ""} className="w-full">
  <div className="group peer w-full border -red-300 p-5 flex items-center justify-between gap-3 glass-bg hover:scale-[1.02]  duration-300 ease-in-out">
    <div className="bg-[#D7F1FB] p-2 rounded-2xl group-hover:rounded-full transition-[border-radius] duration-300 ease-in">
      <Image
        src="/assets/images/icons/info.png"
        className="bg-white p-2 rounded-2xl group-hover:rounded-full transition-[border-radius] duration-300 ease-in"
        alt="card icon"  width={60}  height={60}
      />
    </div>
    <div className="w-[100%] text-left">
      <h2 className="text-left text-primary lg:text-xl  text-lg line-clamp-2 ">{title || ""}</h2>
    </div>
    <div>
      <Image 
        className="group-hover:scale-110 duration-300 ease-in"
        src="/assets/images/icons/link.png"
        width={40}  height={200}
        alt="card icon"
      />
    </div>
  </div>
</Link>

  );
};

export default LearnMoreCard;
