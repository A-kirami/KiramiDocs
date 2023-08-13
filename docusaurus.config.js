// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KiramiBot',
  tagline: '读作 Kirami，写作星见，简明轻快的聊天机器人应用',
  favicon: 'img/favicon.ico',

  url: 'https://docs.kiramibot.com',
  baseUrl: '/',

  organizationName: 'A-kirami',
  projectName: 'KiramiBot',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          breadcrumbs: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/A-kirami/KiramiDocs/edit/main/',
          versions: {
            current: {
              label: 'v0',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@markprompt/docusaurus-theme-search'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content:
          '⭐️ 如果你喜欢 KiramiBot, 请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/A-kirami/KiramiBot">GitHub</a> 上点亮一颗星星 ⭐️',
      },
      metadata: [
        {
          name: 'keywords',
          content: 'bot, chatbot, nonebot, nonebot2, hoshino, hoshinobot, gocq, gocqhttp, qqbot, 聊天机器人, qq机器人',
        },
      ],
      navbar: {
        title: 'KiramiBot',
        logo: {
          alt: 'KiramiBot Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            label: '用户指南',
            type: 'doc',
            docId: 'intro',
          },
          {
            label: '开发手册',
            type: 'doc',
            docId: 'manual/index',
          },
          {
            label: 'API',
            type: 'doc',
            docId: 'api/index',
          },
          {
            label: '社区',
            type: 'doc',
            docId: 'community/index',
          },
          {
            type: 'custom-shop',
            position: 'left',
            text: '浏览应用商店',
            href: 'https://github.com/A-kirami/KiramiBot',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                to: 'https://github.com/A-kirami/KiramiBot/releases',
                label: '发行说明',
              },
            ],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="navbar-separator"></div>',
          },
          {
            type: 'custom-sponsor',
            position: 'right',
            text: '赞助支持',
            href: 'https://afdian.net/a/kiramibot',
          },
          {
            href: 'https://github.com/A-kirami/KiramiBot',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: { plain: {}, styles: [] },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      markprompt: {
        projectKey: 'YOUR-MARKPROMPT-PROJECT-KEY',
        trigger: {
          floating: false,
          placeholder: '问点什么？',
        },
        prompt: {
          tabLabel: '问问 AI',
          placeholder: '嗨~想问点什么？',
        },
        search: {
          enabled: true,
          tabLabel: '搜索文档',
          placeholder: '想找点什么？',
          provider: {
            name: 'algolia',
            apiKey: 'YOUR-ALGOLIA-API-KEY',
            appId: 'YOUR-ALGOLIA-APP-ID',
            indexName: 'YOUR-ALGOLIA-INDEX-NAME',
          },
          getHref: (result) => result.url,
          getHeading: (result) => result.pageTitle,
          getTitle: (result) => result.pageDescription,
          getSubtitle: (result) => result.pageContent,
        },
      },
    }),

  plugins: [
    async function unocssPlugin() {
      return {
        name: 'docusaurus-unocss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('postcss-nesting'))
          postcssOptions.plugins.push(require('@unocss/postcss'))
          return postcssOptions
        },
      }
    },
  ],
}

module.exports = config
