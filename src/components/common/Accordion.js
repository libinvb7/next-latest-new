"use client";
import { useState, useRef } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item py-10 border-b border-b-[#115991]/30 cursor-pointer"
        >
          <div
            className="flex justify-between items-start gap-3"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="accordion-header text-lg lg:text-2xl font-bold max-w-[90%]">
              {item.title}
            </h2>
            {index === activeIndex ? (
              <BsArrowUpCircle className=" md:text-xl lg:text-4xl  text-[#115991] duration-300" />
            ) : (
              <BsArrowDownCircle className="md:text-xl lg:text-4xl text-[#115991] duration-300" />
            )}
          </div>
          <div
            className={`accordion-content overflow-hidden transition-all duration-500 ${
              activeIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
            style={{
              height:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight
                  : 0,
            }}
            ref={(el) => (contentRefs.current[index] = el)}
          >
            <div className="pt-5 md:text-xl">
              {item.htmlContent ? (
                <div
                  dangerouslySetInnerHTML={{ __html: item.htmlContent }}
                />
              ) : (
                item.content || " "
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
