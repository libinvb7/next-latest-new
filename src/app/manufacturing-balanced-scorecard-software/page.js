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
import manufacturingData from "../../data/industires/manufacturingData";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner
        title={manufacturingData.bannerData?.title}
        highlightTitle={manufacturingData.bannerData?.HighlightTitle}
        desc={manufacturingData.bannerData?.desc}
        imageUrl={manufacturingData.bannerData?.Image} btnView={true}
      />
      <ClientCarousel customClass="mt-20"/>
      <LeftRight mainTitle={manufacturingData.leftRightDataTitles.title} mainData={manufacturingData.leftRightData} desc={manufacturingData.leftRightDataTitles.content}/>

      {/* <StickyScrollReveal
        title={manufacturingData.StickyScrollContentTitle?.title}
        desc={manufacturingData.StickyScrollContentTitle?.content}
        content={manufacturingData.StickyScrollContent}
      /> */}
      <VideoSection customClass=" mt-10 lg:mt- 0"
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={manufacturingData.counterTitle?.title}
        counterData={manufacturingData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={manufacturingData.cardSectionTitle?.title}
        cardData={manufacturingData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={manufacturingData.formContents?.title}
        desc={manufacturingData.formContents?.desc}
      />
      <AccordionSection accordionData={manufacturingData.accordionItems} />
    </div>
  );
};

export default page;
