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
import sqdcpsiData from "../../data/solutions/sqdcpsiData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
       <Banner title={sqdcpsiData.bannerData?.title}
        desc={sqdcpsiData.bannerData?.desc} btnView={true}/>
      <VideoSection  customClass="lg:py-20 py-10"  />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcpsiData.cardSectionTitle?.title}
        desc={sqdcpsiData.cardSectionTitle?.desc}
        cardData={sqdcpsiData.cardData}
      />
      <SolutionCta />
     
      <LeftRight
        mainTitle={sqdcpsiData.leftRightDataTitles.title}
        mainData={sqdcpsiData.leftRightData}
        desc={sqdcpsiData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={sqdcpsiData.counterTitle?.title}
        counterData={sqdcpsiData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcpsiData.formContents?.title}
        desc={sqdcpsiData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcpsiData.accordionItems}  />
    </div>
  );
};

export default page;
