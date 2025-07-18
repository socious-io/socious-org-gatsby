const path = require("path");

exports.onPreBootstrap = async () => {
  const { execSync } = require("child_process");
  execSync("npm run fetch-images", { stdio: "inherit" });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "NotionPage") {
    // This will expose the original Notion page ID
    // Example: 2e361e6a-f254-4b01-abc5-1a2e98d209a0
    createNodeField({
      node,
      name: "notionId",
      value: node.pageId || node.id, // fallback if node.pageId doesn't exist
    });
  }
};

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
