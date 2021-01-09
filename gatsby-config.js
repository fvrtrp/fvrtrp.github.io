module.exports = {
  siteMetadata: {
    title: `Fever Trip`,
    description: `Engineering | Design`,
    author: `@fvrtrp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `Fever Trip`,
        short_name: `fvrtrp`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ft.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
