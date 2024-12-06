import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import FeatureSection from "@/components/home/Feature/FeatureSection";
import Hero from "@/components/home/Hero";
import IndustrySection from "@/components/home/industry/IndustrySection";
import RightChoice from "@/components/home/RightChoice";
import VideoSection from "@/components/home/video/VideoSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import TemplateSection from "@/components/home/TemplateSection";
import Cta from "@/components/home/Cta";
import Footer from "@/components/common/Footer";
import BlogListing from "@/components/common/Blog/BlogListingHome";
import Slider from "@/components/common/slider/Slider";

const counterContent = {
  counterTitle: {
    title: "Driving Efficiency and Performance Gains with Data Point ",
  },
  counterData: [
    {
      title: "Faster strategy execution ",
      number: "40",
    },
    {
      title: "Increase in performance visibility",
      number: "20",
    },
    {
      title: " Improvement in goal alignment ",
      number: "70",
    },
  ],
};

const page = () => {
  return (
    <div >
      {/* <Hero /> */}
      <Slider/>
      <VideoSection title="Experience the power of Data Point in action" customClass="lg:h-screen"/>
      <ClientCarousel customClass="pt-20 lg:pt-0"/>
      <FeatureSection />
      <IndustrySection />
      <RightChoice />
      <Counter
        counterTitle={counterContent.counterTitle?.title}
        counterData={counterContent.counterData}
      />
      <TestimonialCarousel />
      <TemplateSection />
      <BlogListing />
      <Cta />
    </div>
  );
};

export default page;
