const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allNotionPage {
        nodes {
          id
          title
          properties {
            Path
            Excerpt
            Content
            Published
            Summary
            Role
            Bio
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading Notion data", result.errors);
    return;
  }

  const pages = result.data.allNotionPage.nodes;

  pages.forEach((node) => {
    const props = node.properties;
    const pagePath = props?.Path;

    if (!pagePath) {
      reporter.warn(`Skipping Notion page with missing Path (ID: ${node.id})`);
      return;
    }

    let component;

    // Blog post: must be Published, have Excerpt, and Content
    if (props?.Published && props?.Excerpt && props?.Content) {
      component = path.resolve("./src/templates/blog-post.js");
    }
    // Newsroom article
    else if (props?.Summary && props?.Published) {
      component = path.resolve("./src/templates/newsroom-article.js");
    }
    // Team member
    else if (props?.Role !== undefined && props?.Published) {
      component = path.resolve("./src/templates/team-member.js");
    } else {
      reporter.warn(`Skipping unrecognized Notion page at ${pagePath}`);
      return;
    }

    createPage({
      path: pagePath,
      component,
      context: {
        id: node.id,
      },
    });
  });
};
