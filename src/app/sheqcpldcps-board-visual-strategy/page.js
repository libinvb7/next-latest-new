import { NavbarDemo } from "@/components/common/NavbarDemo";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import LearnMore from "@/components/solutions/LearnMore";
import SolutionCta from "@/components/solutions/SolutionCta";
import SolutionsCard from "@/components/solutions/SolutionsCardSection";
import AccordionSection from "@/components/solutions/AccordionSection";
import sheqcpldcpsData from "../../data/solutions/sheqcpldcpsData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <Banner title={sheqcpldcpsData.bannerData?.title}
        desc={sheqcpldcpsData.bannerData?.desc} btnView={true}/>
     
      <VideoSection customClass="lg:py-20 py-10"   />
      <ClientCarousel />
      <SolutionsCard
        title={sheqcpldcpsData.cardSectionTitle?.title}
        desc={sheqcpldcpsData.cardSectionTitle?.desc}
        cardData={sheqcpldcpsData.cardData}
      />
      <SolutionCta />
     
        <LeftRight
        mainTitle={sheqcpldcpsData.leftRightDataTitles.title}
        mainData={sheqcpldcpsData.leftRightData}
        desc={sheqcpldcpsData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={sheqcpldcpsData.counterTitle?.title}
        counterData={sheqcpldcpsData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sheqcpldcpsData.formContents?.title}
        desc={sheqcpldcpsData.formContents?.desc}
      />
      <AccordionSection accordionData={sheqcpldcpsData.accordionItems}  />
    </div>
  );
};

export default page;
