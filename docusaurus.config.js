const { tailwindPlugin, webpackPlugin } = require('./src/plugins');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Keptn Docs',
  tagline: 'keptn | Cloud-native application life-cycle orchestration',
  url: 'https://keptn.sh/docs/',
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
    announcementBar: {
      id: 'keptn_0.17.0',
      content:
        'Keptn 0.17.0 is available! Find all <a target="_blank" rel="noopener noreferrer" href="https://keptn.sh/docs/news/release_announcements/keptn-0170/">details on this release here.</a>',
      backgroundColor: '#006bba',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Keptn Docs',
        src: '/keptn-logo.svg',
      },
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
        path: 'docs/explore_keptn',
        routeBasePath: 'explore_keptn',
        id: 'explore_keptn',
        sidebarPath: require.resolve('./sidebars/sidebars-explore-keptn.js'),
        sidebarCollapsible: false,
      },
    ],
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
        path: 'docs/installation',
        routeBasePath: 'installation',
        id: 'installation',
        sidebarPath: require.resolve('./sidebars/sidebars-installation.js'),
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
