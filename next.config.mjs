/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.js");
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "pbs.twimg.com"],
  },
};

export default withNextIntl(nextConfig);
