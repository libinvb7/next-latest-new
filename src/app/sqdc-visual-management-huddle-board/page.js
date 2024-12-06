import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
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
import manufacturingData from "../../data/industires/manufacturingData";
import sqdcData from "../../data/solutions/sqdcData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="">
        <Banner title={sqdcData.bannerData?.title}
        desc={sqdcData.bannerData?.desc} btnView={true}/>
     
      <VideoSection customClass="lg:py-20 py-10"  />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcData.cardSectionTitle?.title}
        desc={sqdcData.cardSectionTitle?.desc}
        cardData={sqdcData.cardData}
      />
      <SolutionCta />
     
       <LeftRight
        mainTitle={sqdcData.leftRightDataTitles.title}
        mainData={sqdcData.leftRightData}
        desc={sqdcData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={sqdcData.counterTitle?.title}
        counterData={sqdcData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcData.formContents?.title}
        desc={sqdcData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcData.accordionItems}  />
    </div>
  );
};

export default page;
