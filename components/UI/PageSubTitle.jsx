import React from "react";

export default function PageSubTitle({ title }) {
  return (
    <div className=" py-2 md:py-7 mb-5 md:mb-10 border-b-2 border-foreground w-full">
      <p className="text-[20px] lg:text-[25px] self-start text-foreground">
        {title}
      </p>
    </div>
  );
}
