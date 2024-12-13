import axios from "axios";

export default function fetchLighthouseStats(url) {
  const apiKey = "YOUR_API_KEY";

  return axios
    .get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${apiKey}&category=performance&category=accessibility&category=seo&category=best-practices`
    )
    .then((response) => {
      const lighthouseData = response.data.lighthouseResult.categories;

      return {
        performance: lighthouseData?.performance?.score * 100 || null,
        accessibility: lighthouseData?.accessibility?.score * 100 || null,
        seo: lighthouseData?.seo?.score * 100 || null,
        bestPractices: lighthouseData?.["best-practices"]?.score * 100 || null,
      };
    })
    .catch((error) => {
      console.error("Error fetching Lighthouse stats:", error);

      return {
        performance: null,
        accessibility: null,
        seo: null,
        bestPractices: null,
      };
    });
}
