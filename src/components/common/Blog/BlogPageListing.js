import React from 'react'
import BlogSidebar from './BlogSidebar'
import BlogCard from './BlogCard'
import BlogPageListingCard from './BlogPageListingCardSection'

const BlogPageListing = () => {
  return (
    <section>
      <div className='container pt-10 gap-2 flex flex-col lg:flex-row'>
        <div className="w-full lg:w-1/4">
                <BlogSidebar/>
        </div>
        <div className="w-full lg:w-3/4 ">
        <div className="flex flex-wrap  justify-between ">
            <BlogPageListingCard />
        </div>
    </div>
    </div>
    </section>
  )
}

export default BlogPageListing