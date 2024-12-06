import Image from "next/image";
import React from "react";

const Banner = ({ title, highlightTitle,desc,btnView }) => {
  return (
    <section className="py-40 bg-center bg-black relative" style={{backgroundImage:"url(/assets/banner/industries/industries-bg.png)"}}>
      <div className="bg-black/30 absolute w-full h-full top-0 z-1 bg-gradient-to-r from-[#145994]/40 to-[#003058]/50"></div>
      <div className="container relative z-10">
        <div className="text-center ">
         
            <h2 className="text-3xl   lg:text-5xl text-center  font-bold text-white leading-[50px]">
              {title || ""}
            </h2>
            <p className="text-center text-white  text-sm lg:text-xl my-7 ">
             {desc || ""}
            </p>
            {btnView ? <div className="flex items-center justify-center gap-3">
              <button className="btn ">Get Started</button>
              <button className="btn btn-orange">Book a Demo</button>
          </div> : null}
            
        </div>
      </div>
    </section>
  );
};

export default Banner;
