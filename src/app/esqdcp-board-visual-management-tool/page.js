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
import esqdcpData from "../../data/solutions/esqdcpData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <Banner title={esqdcpData.bannerData?.title}
        desc={esqdcpData.bannerData?.desc} btnView={true}/>
      
      <VideoSection customClass="mt-20" />
      <ClientCarousel />
      <SolutionsCard
        title={esqdcpData.cardSectionTitle?.title}
        desc={esqdcpData.cardSectionTitle?.desc}
        cardData={esqdcpData.cardData}
      />
        <SolutionCta />
       <LeftRight
        mainTitle={esqdcpData.leftRightDataTitles.title}
        mainData={esqdcpData.leftRightData}
        desc={esqdcpData.leftRightDataTitles.content}
      />
     
      <Counter
        counterTitle={esqdcpData.counterTitle?.title}
        counterData={esqdcpData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={esqdcpData.formContents?.title}
        desc={esqdcpData.formContents?.desc}
      />
      <AccordionSection accordionData={esqdcpData.accordionItems}  />
    </div>
  );
};

export default page;
