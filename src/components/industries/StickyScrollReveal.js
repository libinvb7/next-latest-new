"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


export function StickyScrollReveal({title,desc, content}) {
  return (
    <section className="pt-20">
      <div className="container">
      <div className="flex justify-center items-center flex-col">
          <h2 className="text-primary mb-10 ">
          {title||""}
          </h2>
          <p>{desc || ""}</p>
        </div>
      <StickyScroll content={content} />
      </div>
    </section>
  );
}
