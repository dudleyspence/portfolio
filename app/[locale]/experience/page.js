"use client";
import { Liverpool } from "@/components/Liverpool";
import { Northcoders } from "@/components/Northcoders";
import React from "react";

export default function page() {
  return (
    <div className="flex mt-8 flex-col gap-6 lg:gap-10 justify-center items-center p-8">
      <Liverpool />
      <Northcoders />
    </div>
  );
}
