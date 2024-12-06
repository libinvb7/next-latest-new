import BlogCard from "./BlogCard"

const BlogListing = () => {
  return (
    <section className=" mt-20 px-6   "  >
    <div className="container">
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-primary mb-10 lg:max-w-[700px]">
        Explore our latest insights
        </h2>
      </div>
      <div className="flex flex-wrap  justify-between">
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center p-2">
    <BlogCard />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center p-2">
    <BlogCard />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center p-2">
    <BlogCard />
  </div>
</div>

     
    </div>
  </section>
  )
}

export default BlogListing