"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CountItem = ({ title, end, }) => {
  const counterRef = useRef();
  const hasAnimated = useRef(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; 

          const counter = { value: 0 };
          gsap.to(counter, {
            value: end,
            duration: 3, 
            ease: "power2.out", 
            onUpdate: () => {
              counterRef.current.textContent = `${Math.floor(counter.value)}%`;
            },
          });
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, [end, 3]);

  return (
    <div className="counter-border relative w-full md:w-1/3  flex justify-center items-center  flex-col py-5 lg:py-0">
      <div>
        <h2
          className="font-bold text-5xl bg-gradient-to-r from-[#A9EBFF] to-[#8FFFFD] bg-clip-text text-transparent"
          ref={counterRef}
        >
          0%
        </h2>
      </div>
      <h3 className="text-white text-lg lg:text-xl pt-3 max-w-60 px-1">{title}</h3>
    </div>
  );
};

export default CountItem;
