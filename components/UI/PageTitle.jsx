import React from "react";

export default function PageTitle({ title, extra_info }) {
  return (
    <div className=" w-full">
      <div className=" py-2 md:py-7 mb-5 md:mb-10 border-b-4 border-foreground w-full">
        <p className="text-[30px] lg:text-[40px] self-start text-foreground">
          {title}
        </p>
      </div>
      {extra_info && (
        <p className="text-[10px] mt-5 lg:text-[20px] self-start text-foreground">
          {extra_info}
        </p>
      )}
    </div>
  );
}
