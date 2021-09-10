module.exports = {
  siteMetadata: {
    version: "v1.0.4r",
    siteUrl: process.env.SITE_URL,
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
    "gatsby-plugin-cname",
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2596412,
        sv: 6,
      },
    },
  ],
};