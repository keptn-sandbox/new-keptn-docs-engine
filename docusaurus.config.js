/* eslint-disable */

const { tailwindPlugin, webpackPlugin } = require('./src/plugins');

const pageOptions = {
  sidebarCollapsible: true,
  editUrl: 'https://github.com/keptn-sandbox/new-keptn-docs-engine/tree/main',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Keptn Docs',
  tagline: 'keptn | Cloud-native application life-cycle orchestration',
  url: 'https://keptn-experimental-docs-site.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.png',
  organizationName: 'keptn-sandbox', // Usually your GitHub org/user name.
  projectName: 'new-keptn-docs-engine', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/keptn-logo-square.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Keptn Docs',
        src: '/keptn-logo.svg',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '(^/docs)',
        },
        {
          label: 'Quick Start',
          to: '/quickstart/quickstart',
        },
        {
          label: 'Concepts',
          to: '/concepts/concepts',
        },
        {
          label: 'Tutorials',
          to: '/tutorials/tutorials',
        },
        {
          label: 'Roadmap',
          to: '/roadmap/roadmap',
        },
        {
          label: 'Integrations',
          to: '/integrations/integrations',
        },
        {
          label: 'News',
          to: '/news/news',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    webpackPlugin,
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/quickstart',
        routeBasePath: 'quickstart',
        id: 'quickstart',
        sidebarPath: require.resolve('./sidebars/sidebars-quickstart.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/concepts',
        routeBasePath: 'concepts',
        id: 'concepts',
        sidebarPath: require.resolve('./sidebars/sidebars-concepts.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/tutorials',
        routeBasePath: 'tutorials',
        id: 'tutorials',
        sidebarPath: require.resolve('./sidebars/sidebars-tutorials.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/roadmap',
        routeBasePath: 'roadmap',
        id: 'roadmap',
        sidebarPath: require.resolve('./sidebars/sidebars-roadmap.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/integrations',
        routeBasePath: 'integrations',
        id: 'integrations',
        sidebarPath: require.resolve('./sidebars/sidebars-integrations.js'),
        sidebarCollapsible: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/news',
        routeBasePath: 'news',
        id: 'news',
        sidebarPath: require.resolve('./sidebars/sidebars-news.js'),
        sidebarCollapsible: false,
      },
    ],
  ],
};
