import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import AccordionSection from "@/components/industries/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/industries/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/common/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";
import automotiveData from "../../data/industires/automotiveData";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner
        title={automotiveData.bannerData?.title}
        highlightTitle={automotiveData.bannerData?.HighlightTitle}
        desc={automotiveData.bannerData?.desc}
        imageUrl={automotiveData.bannerData?.Image} btnView={true}
      />
      <ClientCarousel customClass="mt-20" />
      <LeftRight mainTitle={automotiveData.leftRightDataTitles.title} mainData={automotiveData.leftRightData}/>

      <VideoSection
        title="Experience the Power of Data Point Automotive Digital Balanced Scorecard "
        desc="Use Data Point’s advanced Balanced Scorecard tailored for the automotive industry to drive Lean Manufacturing, optimise operations, and monitor crucial KPIs for sustained growth and increased productivity. "
      />
      <Counter
        counterTitle={automotiveData.counterTitle?.title}
        counterData={automotiveData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={automotiveData.cardSectionTitle?.title}
        cardData={automotiveData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={automotiveData.formContents?.title}
        desc={automotiveData.formContents?.desc}
      />
      <AccordionSection accordionData={automotiveData.accordionItems} />
    </div>
  );
};

export default page;
