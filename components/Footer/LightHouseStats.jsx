import React from "react";

export default function LighthouseStats({ stats }) {
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
