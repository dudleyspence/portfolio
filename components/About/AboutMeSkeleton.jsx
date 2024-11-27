import React from "react";

export default function AboutMeSkeleton() {
  return (
    <div className="flex w-full max-w-[650px] xl:max-w-[92vw] flex-col xl:flex-row-reverse bg-background relative animate-pulse">
      <div className="relative w-full xl:w-2/5 shrink-0 rounded-xl overflow-hidden shadow-xl bg-gray-300 h-72 xl:h-auto">
        {/* Image placeholder */}
      </div>
      <div className="font-sans xl:w-3/5 xl:pr-6 pt-6 xl:pt-0 space-y-4 p-4">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
}
