import React from "react";
import { Liverpool } from "@/components/About/Liverpool";
import { Northcoders } from "@/components/About/Northcoders";
import { SelfLearning } from "./SelfLearning";
export default function Education({ t }) {
  return (
    <div className="w-full grid grid-col-1 lg:grid-cols-3 gap-5">
      <Liverpool t={t} />
      <Northcoders t={t} />
      <SelfLearning t={t} />
    </div>
  );
}
