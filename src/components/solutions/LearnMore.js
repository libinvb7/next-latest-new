import LearnMoreCard from "./LearnMoreCard";



const LearnMore = ({title , learnMoreData}) => {
  return (
    <section className=" mt-20 px-6  pb-20">
    <div className="container">
      <div className="  flex justify-center items-center  flex-col">
        <div className="max-w-[800px] text-center">
          <h2 className="text-primary pb-3">
          {title  || ""}
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-[50px]">
        {learnMoreData?.map((data, index) => (
          <div
            className="w-full  md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16 "
            key={index}
          >
            <LearnMoreCard data={data} />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default LearnMore