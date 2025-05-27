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
      { text: "Golang", link: "/golang" },
      { text: "Node.js", link: "/nodejs" },
      { text: "Markdown", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Programming Language",
        items: [
          { text: "Golang", link: "/golang" },
          { text: "Node.js", link: "/nodejs" },
        ],
      },
      {
        text: "Front-End",
        items: [
          {
            text: "Next.js: Deploy with Docker",
            link: "front-end/nextjs-deploy-with-docker",
          },
          {
            text: "Tauri v2 Beta 版本发布公告",
            link: "front-end/tauri-2-0-0-beta",
          },
        ],
      },
      {
        text: "Network",
        items: [
          {
            text: "Windows 系统开放本机端口",
            link: "network/open-port-on-windows",
          },
        ],
      },
      {
        text: "Docker",
        items: [
          {
            text: "Mirror registry in Mainland China",
            link: "docker/mirror-cn",
          },
          { text: "Login", link: "docker/login" },
          {
            text: "Frequently used commands",
            link: "docker/docker-commands-frequently-used",
          },
          { text: "Build", link: "docker/build-and-push" },
          { text: "Run", link: "docker/pull-and-run" },
          { text: "Multiple Arch", link: "docker/multi-arch" },
        ],
      },
      {
        text: "Misc",
        items: [
          { text: "Jest", link: "nodejs/jest" },
          { text: "Matomo", link: "misc/matomo" },
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
        'Copyright © 2023-present <a href="https://www.kamaslau.com/" target="_blank">Kamas Lau</a>',
    },

    search: {
      provider: "local",
    },

    outline: "deep",
  },
});
