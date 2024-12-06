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
import sqcplData from "../../data/solutions/sqcplData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="">
       <Banner title={sqcplData.bannerData?.title}
        desc={sqcplData.bannerData?.desc} btnView={true}/>
     
      <VideoSection customClass="lg:py-20 py-10" />
      <ClientCarousel />
      <SolutionsCard
        title={sqcplData.cardSectionTitle?.title}
        desc={sqcplData.cardSectionTitle?.desc}
        cardData={sqcplData.cardData}
      />
      <SolutionCta />
      <LeftRight
        mainTitle={sqcplData.leftRightDataTitles.title}
        mainData={sqcplData.leftRightData}
        desc={sqcplData.leftRightDataTitles.content}
      />

      <Counter
        counterTitle={sqcplData.counterTitle?.title}
        counterData={sqcplData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqcplData.formContents?.title}
        desc={sqcplData.formContents?.desc}
      />
      <AccordionSection accordionData={sqcplData.accordionItems}  />
    </div>
  );
};

export default page;
