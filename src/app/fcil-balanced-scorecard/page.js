import { NavbarDemo } from "@/components/common/NavbarDemo";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import SolutionCta from "@/components/solutions/SolutionCta";
import SolutionsCard from "@/components/solutions/SolutionsCardSection";
import AccordionSection from "@/components/solutions/AccordionSection";
import fcilData from "../../data/solutions/fcilData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="">
      <Banner title={fcilData.bannerData?.title}
        desc={fcilData.bannerData?.desc} btnView={true}/>
   
      <VideoSection customClass="mt-20"  />
      <ClientCarousel />
      <SolutionsCard
        title={fcilData.cardSectionTitle?.title}
        desc={fcilData.cardSectionTitle?.desc}
        cardData={fcilData.cardData}
      />
      <SolutionCta />
     
         <LeftRight
        mainTitle={fcilData.leftRightDataTitles.title}
        mainData={fcilData.leftRightData}
        desc={fcilData.leftRightDataTitles.content}
      />
      <Counter
        counterTitle={fcilData.counterTitle?.title}
        counterData={fcilData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={fcilData.formContents?.title}
        desc={fcilData.formContents?.desc}
      />
      <AccordionSection accordionData={fcilData.accordionItems}  />
    </div>
  );
};

export default page;
