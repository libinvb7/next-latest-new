import Image from "next/image";

const Hero = () => {
  return (
    
    <section className="hero-background md:flex items-center relative h-full w-full md:mb-20 lg:mb-0">
      <div className="container mx-auto lg:flex gap-3">
        {/* Left Content */}
        <div className="relative">
          <div className="relative flex flex-col justify-center items-center lg:block sm: lg:max-w-[700px]  lg:pt-0 md:pt-20 ">
            <div className=" text-center lg:text-left z-10 px-9 py-2 inline-block w-fit rounded-[40px] border border-dashed border-white text-white font-bold text-sm lg:text-lg">
              KPI-Driven data insights
            </div>
            <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-4xl xl:text-6xl py-5 font-bold tracking-wide leading-tight">
              Align strategy and operations with Balanced Scorecard software
            </h1>
            <p className="text-white text-center lg:text-left text-sm lg:text-xl max-w-[600px] mb-7">
              Boost efficiency with Data Point real-time KPI insights and tailored frameworks.
            </p>
            <div className="flex items-center gap-3">
              <button className="btn">Get Started</button>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
          </div>
        </div>

        <div className="pt-10 lg:pt-0 ">
          <Image  width={1000} height={1000}
            className="lg:absolute md:px-3 lg:px-0 md:top-40 2xl:-right-20 lg:top-36 z-40 lg:[500px]"
            src="/assets/images/bannerslide.png"
            alt="Balanced Scorecard Software Banner"
            priority 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
