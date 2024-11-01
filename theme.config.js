export default {
  logo: 'Documentation',
  project: {
    link: 'https://github.com/ykyrnow/ykyr-docs',
  },
  docsRepositoryBase: 'https://github.com/ykyrnow/ykyr-docs',
  footer: {
    text: 'Test footer value',
  },
  // Add these settings to fix sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  // Add layout configuration
  layout: {
    navigation: true,
    footer: true,
    sidebar: true
  },
  // Navigation configuration
  navigation: true,
  // Optional: Add these for better UI
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
  