import React from "react";

export default function PageTitle({ title }) {
  return (
    <div className=" py-2 md:py-7 mb-5 md:mb-10 border-b-4 border-foreground w-full">
      <p className="text-[30px] lg:text-[40px] self-start text-foreground">
        {title}
      </p>
    </div>
  );
}
