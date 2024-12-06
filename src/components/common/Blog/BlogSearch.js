import React from 'react'

const BlogSearch = () => {
  return (
    <div className='container'>
    
<form className="max-100 mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-[#115991] sr-only dark:text-white">Search articles</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-[#37C1F1] dark:[#37C1F1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-text-[#115991] border border-[#65AFE2] rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#115991] dark:focus:border-[#115991]" placeholder="Search articles" required />
    </div>
</form>
</div>
  )
}

export default BlogSearch