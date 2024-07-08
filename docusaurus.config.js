// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TogetheROS.Bot User Guide',
  tagline: 'The Best Robot Operating System',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tros_doc_en',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'D-Robotics', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

   scripts: [
    {src: 'https://hm.baidu.com/hm.js?b0ab56d93eff7b8e2e7abf81c91ae2d4',  async: true}
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-Hans',
  //   locales: ['zh-Hans'],
  // },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/D-Robotics/tros_doc_en/blob/develop/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/D-Robotics/tros_doc_en/blob/develop/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'TogetheROS.Bot',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tros',
            position: 'left',
            label: 'User Guide',
          },
          {
            href: 'https://developer.d-robotics.cc',
            label: 'D-Robotics Developer Community',
            position: 'left',
          },
          {
            href: 'https://github.com/D-Robotics',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© Copyright ${new Date().getFullYear()}, D-Robotics`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),

    // plugins: [
    //   [
        
    //     "docusaurus-plugin-giscus",
    //     {
    //       repo: "D-Robotics/tros_doc_en", // 例如: "facebook/docusaurus"
    //       repoId: "806560652", // 可以在giscus配置页面找到
    //       category: "General", // 或者你选择的其他分类
    //       categoryId: "42103519", // 可以在giscus配置页面找到
    //       mapping: "title", // 你希望如何映射评论。可选值："pathname", "url", "title"
    //       reactionsEnabled: "1", // 启用表情反应。0为禁用，1为启用
    //       emitMetadata: "1", // 0为禁用，1为启用
    //       inputPosition: "top", // 输入框的位置。"top" 或 "bottom"
    //       theme: "light", // 评论框的主题。"light", "dark", "preferred_color_scheme", 等
    //       lang: "en", // 语言。 例如："en", "zh-CN"
    //       loading: "auto", // 懒加载。"lazy", "eager", "auto"
    //     },
    //   ],
    // ],

    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          docsRouteBasePath: '/',
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        },
      ],
    ],
};

module.exports = config;
