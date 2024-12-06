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
import fmcgData from "../../data/industires/fmcgData";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner
        title={fmcgData.bannerData?.title}
        highlightTitle={fmcgData.bannerData?.HighlightTitle}
        desc={fmcgData.bannerData?.desc}
        imageUrl={fmcgData.bannerData?.Image} btnView={true}
      />
      <ClientCarousel customClass="mt-20"/>
      <LeftRight mainTitle={fmcgData.leftRightDataTitles.title} mainData={fmcgData.leftRightData} desc={fmcgData.leftRightDataTitles.content}/>

      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={fmcgData.counterTitle?.title}
        counterData={fmcgData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={fmcgData.cardSectionTitle?.title}
        cardData={fmcgData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={fmcgData.formContents?.title}
        desc={fmcgData.formContents?.desc}
      />
      <AccordionSection accordionData={fmcgData.accordionItems} />
    </div>
  );
};

export default page;
