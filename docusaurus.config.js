// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portus',
  tagline: 'Metaverse Distribution Protocol',
  url: 'https://sunz7.github.io',
  baseUrl: '/portus-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sunz7', // Usually your GitHub org/user name.
  projectName: 'portus-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Portus',
        logo: {
          alt: 'Portus Logo',
          src: 'img/portus.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Guide',
          },
          {
            href: 'https://bitcoin.org/bitcoin.pdf',
            label: 'White Paper',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/showcase', label: 'Showcase', position: 'right'},
          {
            href: 'https://www.notion.so/Join-Portus-Metaverse-Distribution-Protocol-for-Web3-dea4bc28dcad4573aacd3d9febc591a0',
            label: 'Job Posting',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Contact Us',
            position: 'right',
            items: [
              {
                label: 'Discord',
                href: 'https://www.discord.com',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com',
              },
              // ... more items
            ],
          },
          {
            href: 'https://github.com/portus-protocol/portus-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                label: 'White Paper',
                to: '/docs/white-paper',
              },
            ],
          },
          
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
