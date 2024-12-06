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
import sqdcpData from "../../data/solutions/sqdcpData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <Banner
        title={sqdcpData.bannerData?.title}
        desc={sqdcpData.bannerData?.desc} btnView={true}
      />

      <VideoSection customClass="lg:py-20 py-10"   />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcpData.cardSectionTitle.title}
        desc={sqdcpData.cardSectionTitle.desc}
        cardData={sqdcpData.cardData}
      />
      <SolutionCta />

      <LeftRight
        mainTitle={sqdcpData.leftRightDataTitles.title}
        mainData={sqdcpData.leftRightData}
        desc={sqdcpData.leftRightDataTitles.content}
      />

      <Counter
        counterTitle={sqdcpData.counterTitle.title}
        counterData={sqdcpData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcpData.formContents?.title}
        desc={sqdcpData.formContents?.desc}
      />
      <LearnMore
        title={sqdcpData.learnMoreTitle.title}
        learnMoreData={sqdcpData.learnmoreContent}
      />
      <AccordionSection accordionData={sqdcpData.accordionItems} />
    </div>
  );
};

export default page;
