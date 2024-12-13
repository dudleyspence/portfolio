"use client";

import React, { useEffect, useState } from "react";
import useLighthouse from "@/hooks/useLighthouse";

export default function LighthouseStats() {
  const [url, setUrl] = useState(null);

  // Dynamically set the URL of the current page
  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);
  console.log(url);

  // Use the Lighthouse hook to fetch stats
  const { performance, accessibility, seo, bestPractices } = useLighthouse(url);

  return (
    <div className="text-center text-sm text-gray-400 mt-4">
      <h4 className="font-bold text-gray-300 mb-2">Page Lighthouse Stats</h4>
      <div>
        <p>Performance: {performance || "Fetching..."}</p>
        <p>Accessibility: {accessibility || "Fetching..."}</p>
        <p>SEO: {seo || "Fetching..."}</p>
        <p>Best Practices: {bestPractices || "Fetching..."}</p>
      </div>
    </div>
  );
}
