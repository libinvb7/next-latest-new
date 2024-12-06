import { NavbarDemo } from "@/components/common/NavbarDemo";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import { BackgroundBoxesDemo } from "@/components/solutions/BackgroundBoxesDemo";
import LearnMore from "@/components/solutions/LearnMore";
import SolutionCta from "@/components/solutions/SolutionCta";
import SolutionsCard from "@/components/solutions/SolutionsCardSection";
import AccordionSection from "@/components/solutions/AccordionSection";
import sqdcmData from "../../data/solutions/sqdcmData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <Banner title={sqdcmData.bannerData?.title}
        desc={sqdcmData.bannerData?.desc} btnView={true}/>
      <VideoSection customClass="lg:py-20 py-10"  />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcmData.cardSectionTitle?.title}
        desc={sqdcmData.cardSectionTitle?.desc}
        cardData={sqdcmData.cardData}
      />
      <SolutionCta />
 
       <LeftRight
        mainTitle={sqdcmData.leftRightDataTitles.title}
        mainData={sqdcmData.leftRightData}
        desc={sqdcmData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={sqdcmData.counterTitle?.title}
        counterData={sqdcmData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcmData.formContents?.title}
        desc={sqdcmData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcmData.accordionItems}  />
    </div>
  );
};

export default page;
