const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Seongik(Ike)",
    image: "/chicago.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer?",
    bio: "Finding Flow",
    email: "kpic1638@gmail.com",
    linkedin: "seongik-kim-8356431b0",
    github: "seongikkim",
    instagram: "seongik_k",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Journey to find flow",
    description: "Journal entries",
    scheme: "system",
    theme: "dark",
  },

  // CONFIG configration (required)
  link: "https://journey-to-find-flow.vercel.app",
  since: 2021, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "seongikkim/morethan-log-comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600 * 24, // revalidate time for [slug], index
}

module.exports = { CONFIG }
