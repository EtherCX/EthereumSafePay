module.exports = {
  siteMetadata: {
    title: `Ethereum SafePay`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: 'UA-104459349-1', // this one is for EtherCX @ Github
        trackingId: 'UA-104478518-1', // this one is for destensons @ github
      }
    }
  ],
  pathPrefix: `EtherCX--EthereumSafePay/`,
};
