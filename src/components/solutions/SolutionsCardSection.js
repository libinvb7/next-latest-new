
import SolutionCard from "./SolutionCard";


const SolutionsCard = ({title, desc , cardData}) => {
  return (
    <section className=" mt-20 px-6  pb-10 lg:pb-20">
      <div className="container">
        <div className="  flex justify-center items-center  flex-col">
          <div className="max-w-[800px] text-center">
            <h2 className="text-primary pb-3">
              {title || ""}
            </h2>
          </div>
          <p className="text-center max-w-[900px]">
            {desc || ""}
          </p>
        </div>

        <div className="flex flex-wrap justify-center pt-[50px]">
          {cardData.map((data, index) => (
            <div
              className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16 solution-card"
              key={index}
            >
              <SolutionCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCard;
