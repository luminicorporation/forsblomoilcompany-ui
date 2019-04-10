module.exports = {
  siteMetadata: {
    title: `Forsblom Oil Company`,
    description: `Research on hyper-sensitive quantum particle to track location.`,
    author: `@nilsforsblom`,
    authorId: `14014932`, // http://gettwitterid.com/?user_name=nilsforsblom
    siteUrl: `http://forsblomoilcompany.me`, // no trailing slash && must be http!
    socialMediaCard: `forsblomoilcompany-card.jpg` // must be jpg!
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `forsblomoilcompany`,
        short_name: `forsblomoilcompany`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
