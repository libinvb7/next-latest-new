"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <div className="glass-bg">
      <div className="lg:flex gap-4">
        <div className="lg:w-2/5  flex flex-col">
          {tabs.map((tab, index) => (
            <div
              className={`px-4 py-5 mb-3 bg-white  tab-shadow rounded-lg cursor-pointer ${
                index === activeTab ? "btn btn-primary" : ""
              }`}
            >
              <div
                key={index}
                className={`${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex gap-3">
                  <div
                    className={`${
                      index === activeTab
                        ? "border border-l-2 border-white"
                        : ""
                    }`}
                  ></div>
                  <h2
                    className={`font-bold text-xl  ${
                      index === activeTab ? "text-white" : "text-[#115991]"
                    } `}
                  >
                    {tab.title}
                  </h2>
                </div>
                {index === activeTab ? (
                  <p className="text-lg text-md font-normal py-3">
                    {tab.subTitle}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-3/5 bg-white rounded-lg p-5 tab-shadow">
          <div className="flex items-center justify-center">
            <Image src={tabs[activeTab].image}  width={500} height={200} alt="product logo"/>
          </div>
          <div className="flex justify-start items-center pt-3 flex-col" >
            <ul >
              {tabs[activeTab].points.map((point, i) => (
                <li key={i} className="flex gap-3 py-2 items-center font-[600]">
                  <FaCheck className="text-[#37BDB0] " /> {point}
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center py-3">
              <button className="btn btn-primary ">See How It Works</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
