import Accordion from "@/components/common/Accordion";

const AccordionSection = ({accordionData }) => {
 
  return (
    <section className="mt-20">
      <div className="container ">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mb-10 lg:max-w-[600px]">
            Your Questions, Answered!
          </h2>
        </div>
        <Accordion items={accordionData} />
      </div>
    </section>
  );
};

export default AccordionSection;
