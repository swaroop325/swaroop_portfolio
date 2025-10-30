module.exports = {
  siteMetadata: {
    title: 'Swaroop A.S - Full Stack Developer',
    author: 'Swaroop A.S',
    description: 'Full Stack Developer | DevOps Enthusiast | Cloud Learner | Servant Leader',
    image: 'src/images/favicon.ico',
    siteUrl: 'https://swaroop325.web.app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-FWM8K6FLTM', // Replace with your Google Analytics Measurement ID
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Swaroop A.S - Portfolio',
        short_name: 'Swaroop',
        start_url: '/',
        background_color: '#0a0a19',
        theme_color: '#00d4ff',
        display: 'minimal-ui',
        icon: 'src/images/profile.jpeg',
      },
    },
    'gatsby-plugin-sass',
  ],
}
