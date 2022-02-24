module.exports = {
  siteMetadata: {
    title: 'Swaroop A S',
    author: 'Swaroop',
    description: 'Portfolio website',
    image: 'src/images/favicon.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Swaroop A S',
        short_name: 'swaroop',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
