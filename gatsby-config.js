module.exports = {
  siteMetadata: {
    title: `Design Village 2019`,
    description: `Theme of this year's festival - Working together. UI / UX designers, illustrators, graphic designers, VR engineers and creative directors - experts from the best Ukrainian and world companies will tell you who to cooperate with while working on the project and what to expect of it.`,
    author: `@DesignVillageUA`,
    url: "https://designvillage.com.ua", // No trailing slash allowed!
    image: "/images/logo-big.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146783038-1",
        head: false,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DesignVillage2019`,
        short_name: `DesignVillage2019`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
