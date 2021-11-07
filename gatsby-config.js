module.exports = {
  siteMetadata: {
    version: "v1.1.2r",
    siteUrl: `https://www.ricosoftworks.com`,
    title: "Rico's Softworks",
    desc: "Learn about who I am and what I do! Here you can take a look at my past and current projects, and get into contact with me.",
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
        host: `https://www.ricosoftworks.com`,
        sitemap: `https://www.ricosoftworks.com/sitemap.xml`,
        resolveEnv: () => 'production',
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