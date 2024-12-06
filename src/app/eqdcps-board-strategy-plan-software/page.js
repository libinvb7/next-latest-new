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
import eqdcpsData from "../../data/solutions/eqdcpsData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div >
      <Banner title={eqdcpsData.bannerData?.title}
        desc={eqdcpsData.bannerData?.desc} btnView={true}/>
      <VideoSection customClass="py-20" />
      <ClientCarousel />
      <SolutionsCard
        title={eqdcpsData.cardSectionTitle?.title}
        desc={eqdcpsData.cardSectionTitle?.desc}
        cardData={eqdcpsData.cardData}
      />
      <SolutionCta />
    
      <LeftRight
        mainTitle={eqdcpsData.leftRightDataTitles.title}
        mainData={eqdcpsData.leftRightData}
        desc={eqdcpsData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={eqdcpsData.counterTitle?.title}
        counterData={eqdcpsData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={eqdcpsData.formContents?.title}
        desc={eqdcpsData.formContents?.desc}
      />
      <AccordionSection accordionData={eqdcpsData.accordionItems}  />
    </div>
  );
};

export default page;
