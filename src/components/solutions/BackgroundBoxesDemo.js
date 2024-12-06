"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo({ title, highlightedTitle, desc }) {
  return (
    <div className="container h-[400px] relative w-full overflow-hidden custom-solutions-mask  flex flex-col items-center justify-center rounded-lg boxes-custom-background">
      <div className="absolute inset-0 w-full h-full bg-[#fff] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h2 className="text-3xl lg:text-5xl text-center  font-bold text-[#145994] leading-[50px]  relative z-20">
        {title || ''}
        <span className="bg-gradient-to-r from-[#1873ac]  to-[#2ca9e0] bg-clip-text text-transparent">
          <br></br>
          {highlightedTitle || ""}
        </span>
      </h2>
      <p className="text-center  text-sm lg:text-xl my-7 max-w-[750px] relative z-20">
        {desc || ""}
      </p>
      <div className="flex items-center gap-3 relative z-20 ">
        <button className="btn btn-border">Get Started</button>
        <button className="btn btn-primary">Book a Demo</button>
      </div>
    </div>
  );
}
