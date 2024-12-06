import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import IndustrySection from "@/components/home/industry/IndustrySection";
import AccordionSection from "@/components/industries/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/industries/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/common/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";
import energyData from "../../data/industires/energyData";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner
        title={energyData.bannerData?.title}
        highlightTitle={energyData.bannerData?.HighlightTitle}
        desc={energyData.bannerData?.desc}
        imageUrl={energyData.bannerData?.Image} btnView={true}
      />
      <ClientCarousel customClass="mt-20"/>
      <LeftRight mainTitle={energyData.leftRightDataTitles.title} mainData={energyData.leftRightData} desc={energyData.leftRightDataTitles.content}/>

      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={energyData.counterTitle?.title}
        counterData={energyData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={energyData.cardSectionTitle?.title}
        cardData={energyData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={energyData.formContents?.title}
        desc={energyData.formContents?.desc}
      />
      <AccordionSection accordionData={energyData.accordionItems} />
    </div>
  );
};

export default page;
