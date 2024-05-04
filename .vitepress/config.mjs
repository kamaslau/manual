import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kamas' Manual",
  description:
    "How-to instructions from personal experiences of product designing, programming and DevOps skills.",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  sitemap: {
    hostname: "https://devea-translations.kamaslau.com",
  },
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Front-End",
        items: [
          {
            text: "Next.js: Deploy as Docker image",
            link: "front-end/nextjs-deploy",
          },
        ],
      },
      {
        text: "Docker",
        items: [
          { text: "Login", link: "docker/login" },
          { text: "Build", link: "docker/build-and-push" },
          { text: "Run", link: "docker/pull-and-run" },
          { text: "Multiple Arch", link: "docker/multi-arch" },
        ],
      },
      {
        text: "Misc",
        items: [
          { text: "Matomo", link: "misc/matomo" },
          { text: "Jest", link: "nodejs/jest" },
        ],
      },
    ],

    // https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: "github", link: "https://github.com/kamaslau/manual" },
      { link: "https://www.kamaslau.com/" },
    ],

    footer: {
      copyright:
        'Copyright © 2023-present <a href="https://www.kamaslau.com" target="_blank">Kamas Lau</a>',
    },

    search: {
      provider: "local",
    },

    outline: "deep",
  },
});
