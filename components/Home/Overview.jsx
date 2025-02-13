import React from "react";
import SelectedProjects from "./SelectedProjects";
import MiniAbout from "./MiniAbout";
import RecentUpdates from "./RecentUpdates";

export default function Overview() {
  return (
    <div className="pb-10 lg:pb-20 flex flex-col justify-center items-center gap-24 w-full md:px-0">
      <RecentUpdates />
      <SelectedProjects />
      <MiniAbout />
    </div>
  );
}
