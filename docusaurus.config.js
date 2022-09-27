// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const listRemote = require("./docusaurus-lib-list-remote.js")
const enhancementProposalsRepo = listRemote.createRepo('keptn', 'enhancement-proposals', 'master')
const keptnDeveloperDocsLink = listRemote.createRepo('keptn', 'keptn', 'master')


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keptn Docs',
  tagline: 'Keptn | Cloud-native application life-cycle orchestration',
  url: 'https://keptn.sh/docs',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'keptn-sandbox', // Usually your GitHub org/user name.
  projectName: 'new-keptn-docs-engine', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/keptn-sandbox/new-keptn-docs-engine/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'keptn_0.17.0',
        content:
          'Keptn 0.19.0 is available! Find all <a target="_blank" rel="noopener noreferrer" href="https://keptn.sh/docs/news/release_announcements/keptn-0190/">details on this release here.</a>',
        backgroundColor: '#006bba',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: 'Kepnt Docs Logo',
          src: 'img/keptn-logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            to: '/docs-enhancement-proposals/introduction',
            label: 'Keptn Enhancement Proposals',
            position: 'left',
            activeBaseRegex: `/docs-enhancement-proposals/`,
          },
          {
            to: '/docs-keptn-developer/introduction',
            label: 'Keptn Developer Docs',
            position: 'left',
            activeBaseRegex: `/docs-keptn-developer/`,
          },
          {
            href: 'https://github.com/keptn',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://slack.keptn.sh/',
            label: 'Slack',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Kepnt Docs Logo',
          src: 'img/keptn-logo.svg',
          href: 'https://keptn.sh/',
        },
        style: 'light',
        links: [
          {
            title: 'Sitemap',
            items: [
              {
                label: 'Why Keptn?',
                to: 'https://keptn.sh/why-keptn/',
              },
              {
                label: 'Docs',
                to: 'https://keptn.sh/docs',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Releases',
                to: 'https://github.com/keptn/keptn/releases/',
              },
              {
                label: 'Issues',
                to: 'https://github.com/keptn/keptn/issues',
              },
            ],
          },
        ],
        copyright: `
        © 2022 The Keptn Authors | Documentation Distributed under CC-BY-4.0© 2022 The Linux Foundation. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our  <a href="https://keptn.sh/docs">Trademark Usage</a>`,
      },
      image:
        'https://raw.githubusercontent.com/keptn/community/main/branding/logos/keptn-transparent.png',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:image',
          content:
            'https://raw.githubusercontent.com/keptn/community/main/branding/logos/keptn-transparent.png',
        },
        { name: 'twitter:title', content: 'Keptn Docs' },
        {
          name: 'twitter:description',
          content: 'Welcome to Keptn Docs',
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-remote-content',
      {
        name: "docs-enhancement-proposals",
        id: "docs-enhancement-proposals",
        outDir: "docs-enhancement-proposals",
        sourceBaseUrl: listRemote.buildRepoRawBaseUrl(enhancementProposalsRepo),
        documents: listRemote.listDocuments(
            enhancementProposalsRepo,
            [
                '*.md', "*.mdx", "*.png"
            ],
            [
              ".github/**", "text/**"
            ]
        )
    },
    ],
    [
      'docusaurus-plugin-remote-content',
      {
        name: "docs-keptn-developer",
        id: "docs-keptn-developer",
        outDir: "docs-keptn-developer",
        sourceBaseUrl: listRemote.buildRepoRawBaseUrl(keptnDeveloperDocsLink),
        documents: listRemote.listDocuments(
            keptnDeveloperDocsLink,
            [
                'docs/developer/*.md', "docs/developer/*.mdx", "docs/developer/**/*.png"
            ],
        )
    },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-enhancement-proposals',
        path: 'docs-enhancement-proposals',
        routeBasePath: 'docs-enhancement-proposals',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-keptn-developer',
        path: 'docs-keptn-developer',
        routeBasePath: 'docs-keptn-developer',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
        excludeRoutes: ['0.15.x/**/*', '0.16.x/**/*', '0.17.x/**/*', '0.18.x/**/*', 'next/**/*'],
      },
    ],
  ],
};

module.exports = config;
