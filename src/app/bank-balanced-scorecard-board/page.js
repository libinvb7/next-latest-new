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
import bankData from "../../data/industires/bankData";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner
        title={bankData.bannerData?.title}
        highlightTitle={bankData.bannerData?.HighlightTitle}
        desc={bankData.bannerData?.desc}
        imageUrl={bankData.bannerData?.Image} btnView={true}
      />
      <ClientCarousel customClass="mt-20"/>
      <LeftRight mainTitle={bankData.leftRightDataTitles.title} mainData={bankData.leftRightData} desc={bankData.leftRightDataTitles.content}/>

      <VideoSection 
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={bankData.counterTitle?.title}
        counterData={bankData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={bankData.cardSectionTitle?.title}
        cardData={bankData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={bankData.formContents?.title}
        desc={bankData.formContents?.desc}
      />
      <AccordionSection accordionData={bankData.accordionItems} />
    </div>
  );
};

export default page;
