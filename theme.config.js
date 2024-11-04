export default {
  logo: 'Documentation',
  project: {
    link: 'https://github.com/ykyrnow',
  },
  docsRepositoryBase: 'https://github.com/ykyrnow/ykyr-docs',
  
  // Try these breadcrumb settings
  breadcrumb: false,

  footer: {
    component: null,
    text: null
  },
  
  // Also disable in layout
  layout: {
    navigation: true,
    footer: true,
    sidebar: true,
    breadcrumb: false
  },
  
  // Add this to disable navigation features
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
  }
}