import Link from 'next/link'

export default {
  project: {
    link: 'https://github.com/ykyrnow',
  },
  docsRepositoryBase: 'https://github.com/ykyrnow/ykyr-docs',
  
  breadcrumb: false,

  footer: {
    component: null,
    text: null
  },
  
  layout: {
    navigation: true,
    footer: true,
    sidebar: true,
    breadcrumb: false
  },
  
  navigation: {
    breadcrumb: false,
    prevLinks: true,
    nextLinks: true
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  
  darkMode: true,
  search: {
    placeholder: 'Search documentation...'
  },
  toc: {
    float: true,
    title: "On This Page"
  },
  primaryHue: {
    dark: 204,
    light: 204
  },

  // Add font configuration
  head: () => (
    <>
      <style>{`
        /* latin */
        @font-face {
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/notosans/v35/o-0IIpQlx3QUlC5A4PNr5TRA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* latin */
        @font-face {
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/notosans/v35/o-0NIpQlx3QUlC5A4PNjXhFVZNyB.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        :root {
          --font-sans: 'Noto Sans', system-ui, -apple-system, sans-serif;
        }
        
        body, html {
          font-family: var(--font-sans) !important;
        }

        /* Keep existing style overrides */
        .nextra-nav-container nav:not(.nextra-nav-container-content) {
          display: none;
        }
        .nextra-nav-container h1,
        .nextra-nav-container p {
          display: none;
        }
        .nextra-nav-container-blur {
          background: transparent !important;
        }
      `}</style>
    </>
  )
}