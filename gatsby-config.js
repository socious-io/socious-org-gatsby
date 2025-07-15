require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Socious Fund`,
    description: `Funding underrepresented founders through community-driven grants.`,
    author: `@socious`,
    siteUrl: `https://yourdomain.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,

    // Source images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Notion content
    {
      resolve: `gatsby-source-notion`,
      options: {
        token: process.env.GATSBY_NOTION_TOKEN,
        databases: process.env.GATSBY_NOTION_DATABASES
          ?.split(",")
          .map((id) => id.trim()),
        pages: [],
      },
    },

    // Modern MDX support (v2 compatible)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
