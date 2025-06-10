import Link from 'next/link';

export default {
  // Your existing logo and other configs...
  logo: (
    <Link href="/docs" legacyBehavior>
      <svg 
        width="95" 
        height="32" 
        viewBox="0 0 400 167" 
        fill="currentColor"
        style={{ 
          margin: '0',
          cursor: 'pointer'
        }}
      >
        <path d="M400,166.2l-27.9-40h23.5V47.1c0-25.9-21.2-47.1-47.1-47.1H264l-12.3,50.9L239.4,0h-74.2l-20.6,82.9h-0.9V0H64.8L52.5,50.9L40.2,0H0l31.7,114.3v51.8h41.5v-51.8l29-104.7v156.5h41.5v-40h10.9v40h46l-27.9-58.1L200.6,4.9l30.4,109.4v51.8h41.5v-51.8l29-104.7v156.5H343v-40H354v40L400,166.2L400,166.2z M343,87.3V43.6H354v43.8H343z" />
      </svg>
    </Link>
  ),

  project: {
    link: 'https://github.com/ykyrnow',
  },
  docsRepositoryBase: 'https://github.com/ykyrnow/ykyr-docs',

  useNextSeoProps() {
    return {
      titleTemplate: '%s – YKYR'
    }
  },

  head: ({ title }) => (
    <>
      <title>{title ? title : 'YKYR'}</title>
      <meta
        name="description"
        content="Learn how to collect, own, and monetize your browsing data securely with YKYR."
      />
      <link rel="icon" href="/favicon.ico" />
      <style>{`
        @font-face {
          font-family: 'Noto Sans';
        }

        :root {
          --font-sans: 'Noto Sans', system-ui, -apple-system, sans-serif;
        }

        body, html {
          font-family: var(--font-sans) !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Make link text color match regular text while keeping default styling */
        .nextra-content a {
          color: inherit !important;
        }

        /* Hover effect */
        .nextra-content a:hover {
          opacity: 0.8;
        }

        /* Remove top space */
        .nextra-nav-container {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Hide only the Documentation text in header */
        .nextra-nav-container nav > a[href="/docs"] {
          display: none !important;
        }

        /* Remove extra spacing */
        #__next, main {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Fix header position */
        .nextra-nav-container-blur {
          top: 0 !important;
        }

        /* Keep breadcrumb hidden */
        .nextra-breadcrumb {
          display: none !important;
        }

        /* Fix content width */
        .nx-max-w-6xl {
          max-width: none !important;
        }

        /* Adjust main content */
        main {
          flex: 1;
        }
      `}</style>
    </>
  ),

  // Add components configuration
  components: {
    Tabs: {
      defaultProps: {
        items: []
      }
    }
  },

  // Other configurations
  darkMode: true,
  search: {
    placeholder: 'Search documentation...',
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  primaryHue: {
    dark: 204,
    light: 204,
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  navigationText: {
    prevPage: 'Previous',
    nextPage: 'Next',
  },
  layout: {
    navigation: true,
    footer: false,
    sidebar: true,
    breadcrumb: false,
  }
};