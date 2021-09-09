module.exports = {
  siteMetadata: {
    version: "v1.0.1r",
    siteUrl: "https://www.ricosoftworks.com",
    title: "Rico's Softworks",
    socials: {
      twitter: "https://twitter.com/ricovdk",
      mail: "work@ricosoftworks.com",
      gitlab: "https://gitlab.com/rico_vdk/",
      git: "https://github.com/RicoVDK",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          tablet: '(min-width: 768px)',
          desktop: '(min-width: 1024px)',
        },
      },
    },
  ],
};