module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `lcxvst7v`,
        dataset: `production`,
        // a token with read permissions is required    
        // if you have a private dataset
        overlayDrafts:true,
        watchMode:true,
        token:'skJoh3isJs6B8Mu8PkCMY9sPfSlfP9itlKEoPRMmN6mcAtgtTECWpSQTvRs69EN8nC9sdeervcwkRqRBMWw7x8UNKfWKWUVbRZ6hR8Ocsq0YDjQ5W6UUtHqPRIbCLQ0Ak9b9cXM0dAUrL4Hkk5izgZmV1Cr4xJ1MB4VyWPR79EKdndqp5BKV'
      },
    },
  ],
}
