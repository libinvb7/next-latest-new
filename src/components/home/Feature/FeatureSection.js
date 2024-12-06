"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "./TabsNew";
import { GiCheckMark } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    {
      title: "Lean Daily Management System",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      points: [
        "Monitor daily activities and track fdf",
        "Monitor daily activities and track perforgdafvdmance",
        "Monitor daily activities and track perforsdfsdmance",
      ],
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
    },
    {
      title: "Gemba Walk",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
      points: [
        "Monitor daily activities and track dfsd",
        "Monitor daily activities and track performance",
        "Monitor daily activities and track dfs",
      ],
    },
    {
      title: "Digital Visual Management Board ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitor daily activities and track df",
        "Monitor daily activities and track perforsdmance",
      ],
    },
    {
      title: "Strategy Planning  ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
      points: [
        "Monitor daily actddfsadivities and track performance",
        "Monitor daily activities and track performance",
        "Monitor daily activities and track performance",
      ],
    },
    {
      title: "KPI Visualisation  ",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitor daisdfsdaly activities and track performance",
        "Monitor daily actfsadfadivities and track performance",
      ],
    },
    {
      title: "Strategy Execution",
      subTitle:
        "Optimise daily operations through systematic management Optimise",
      image: "/assets/images/bannerslide.png",
      alt: "tab image",
      points: [
        "Monitor daily activities and track performance",
        "Monitorasfdsa daily activities and track performance",
        "Monitor daily activities and track performance",
      ],
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "center center",
        end: "+=1500px",
        scrub: 3,
        pin: true,
        pinSpacing: true, 
        onUpdate: (self) => {
          const newActiveTab = Math.round(self.progress * (tabs.length - 1));
          setActiveTab(newActiveTab);
        },
      });

      return () => {
        scrollTrigger.kill(); 
      };
    }
  }, [tabs.length]);

  return (
    <section className="mt-20 px-6 relative z-[10] "  >
      {/* <div className="spacer" style={{height: "130px"}}></div> */}
      <div className="container  " ref={containerRef} >
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
            See how Data Point unifies strategic insights across your organisation
          </h2>
        </div>

        <div className="glass-white rounded-2xl custom-shadow p-10 " >
          <div className="lg:flex gap-4">
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="lg:w-3/5 bg-white rounded-lg p-5 tab-shadow">
              <div className="flex items-center justify-center">
                <Image src={tabs[activeTab].image} alt={tabs[activeTab].alt} width={500} height={200} />
              </div>
              <div className="flex flex-col items-center pt-3">
                <ul>
                  {tabs[activeTab].points.map((point, i) => (
                    <li key={i} className="flex gap-3 py-2 items-center font-[600]">
                       <div className=" bg-[#37C1F1]/20 rounded-full h-fit ">
                <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold" />
              </div> {point}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center items-center py-2">
                  <button className="btn btn-primary">See How It Works</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
