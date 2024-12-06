import Banner from "@/components/common/Banner";
import BlogListing from "@/components/common/Blog/BlogListingHome";
import BlogPageListing from "@/components/common/Blog/BlogPageListing";
import BlogSearch from "@/components/common/Blog/BlogSearch";
import RecentBlog from "@/components/common/Blog/RecentBlog";
import Cta from "@/components/home/Cta";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Data Point Blogs"
        desc="Balanced Scorecard aligns day-to-day activities with enterprise vision, mission, and values."
        btnView={false}
      />
      <RecentBlog />
      <BlogSearch/>
      <BlogPageListing/>
      <Cta/>
        </>
  );
};

export default page;
