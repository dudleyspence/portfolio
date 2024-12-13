"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

export default function useLighthouse(url) {
  const [performance, setPerformance] = useState(null);
  const [accessibility, setAccessibility] = useState(null);
  const [seo, setSeo] = useState(null);
  const [bestPractices, setBestPractices] = useState(null);

  const apiKey = "AIzaSyBH5xT6GO9kcAK1r5_aeP20_IvXBqvqUfM";

  useEffect(() => {
    if (!url) return;
    axios
      .get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&key=${apiKey}&category=performance&category=accessibility&category=seo&category=best-practices`
      )
      .then((response) => {
        const lighthouseData = response.data.lighthouseResult.categories;
        setPerformance(lighthouseData.performance.score * 100);
        setAccessibility(lighthouseData.accessibility.score * 100);
        setSeo(lighthouseData.seo.score * 100);
        setBestPractices(lighthouseData["best-practices"].score * 100);
      })
      .catch((err) => {
        console.log("Error obtaining lighthouse stats", err);
      });
  }, [url]);

  return {
    performance,
    accessibility,
    seo,
    bestPractices,
  };
}
