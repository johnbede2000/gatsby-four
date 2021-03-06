module.exports = {
  siteMetadata: {
    title: `John Cervantes`,
    siteUrl: `https://www.johncervantes.co.uk`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }]
};