/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.js");
const nextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "pbs.twimg.com",
      "res.cloudinary.com",
      "media.licdn.com",
    ],
  },
};

export default withNextIntl(nextConfig);
