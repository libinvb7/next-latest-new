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
import sqdclData from "../../data/solutions/sqdclData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="">
      <Banner
        title={sqdclData.bannerData?.title}
        desc={sqdclData.bannerData?.desc} btnView={true}
      />
      <VideoSection customClass="lg:py-20 py-10"  />
      <ClientCarousel />
      <SolutionsCard
        title={sqdclData.cardSectionTitle?.title}
        desc={sqdclData.cardSectionTitle?.desc}
        cardData={sqdclData.cardData}
      />
      <SolutionCta />
      <LeftRight
        mainTitle={sqdclData.leftRightDataTitles.title}
        mainData={sqdclData.leftRightData}
        desc={sqdclData.leftRightDataTitles.content}
      />

      <Counter
        counterTitle={sqdclData.counterTitle?.title}
        counterData={sqdclData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdclData.formContents?.title}
        desc={sqdclData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdclData.accordionItems} />
    </div>
  );
};

export default page;
