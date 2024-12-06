import Image from "next/image";
import React from "react";

const FormInput = () => {
  return (
    <form className=" mx-auto">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Business email<span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image
              src="/assets/images/Message.png"
              width={20}
              height={200}
              alt="product logo"
            />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
          focus-visible:border-[#115991] block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Full name<span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image
              src="/assets/images/Profile.png"
              width={15}
              height={200}
              alt="product logo"
            />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
           focus-visible:border-[#115991] block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Phone Number<span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image
              src="/assets/images/ChatFormnew.png"
              width={20}
              height={200}
              alt="product logo"
            />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
           focus-visible:border-[#115991] block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Select your scorecard framework
          <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image
              src="/assets/images/ChatFormnew.png"
              width={20}
              height={200}
              alt="product logo"
            />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
            focus-visible:border-[#115991] block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-start top-[10px] ps-3.5 pointer-events-none">
            <Image
              src="/assets/images/ChatFormnew.png"
              width={20}
              height={200}
              alt="product logo"
            />
          </div>
          <textarea
            id="email-address-icon"
            className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
           focus-visible:border-[#115991] block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Start Now
      </button>
    </form>
  );
};

export default FormInput;
