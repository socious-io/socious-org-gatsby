import React from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";

const Blog = ({ data }) => (
  <main className="bg-white font-sans text-gray-900">
    <Navbar />
    <section className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center mb-12">
        <h3 className="text-base md:text-lg text-green-700 font-medium mb-2">
          Our blog
        </h3>
        <h1 className="text-4xl font-bold mb-2">Latest blog posts</h1>
        <h3 className="text-gray-500 text-lg">
          Thoughts and opinions from the Socious team
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.allNotionPage.nodes.map((post) => {
          const { Path, Excerpt, Date: dateObj, Picture } = post.properties;
          const title = post.title;
          const date = dateObj?.start;
          const imageUrl = Picture?.[0]?.url;

          return (
            <Link
              key={post.id}
              to={Path}
              className="block bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 no-underline"
            >
              <div className="aspect-[16/9] bg-gray-200 rounded-t-xl overflow-hidden">
                <img
                  src={imageUrl || "/images/blog-placeholder.jpg"}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">{date}</p>
                <h2 className="text-xl font-semibold mb-2 hover:underline">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm">{Excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  </main>
);

export const query = graphql`
  query BlogPageQuery {
    allNotionPage(
      filter: {
        properties: {
          Published: { eq: true }
          Excerpt: { ne: null }
          Content: { ne: null }
        }
      }
    ) {
      nodes {
        id
        title
        properties {
          Path
          Excerpt
          Date {
            start
          }
          Picture {
            name
            url
          }
        }
      }
    }
  }
`;

export default Blog;
