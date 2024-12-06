import IndustryCard from "@/components/industries/IndustryCard";



const ManufacturingCompaniesUseBalancedScorecard = ({cardData , cardSectionTitle}) => {
  return (
    <section className="px-6 industry-section pt-48 ">
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary text-[#fff] mb-10 lg:max-w-[700px]">
          {cardSectionTitle || ""}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          {cardData.map((data, index) => (
            <div
              className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16"
              key={index}
            >
              <IndustryCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCompaniesUseBalancedScorecard;
