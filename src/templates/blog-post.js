import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";

const BlogPost = ({ data }) => {
  const post = data.notionPage;
  const { Excerpt, Date: dateObj, Picture, Content } = post.properties;
  const date = dateObj?.start;
  const imageUrl = Picture?.[0]?.url;
  const imageAlt = Picture?.[0]?.name || post.title;

  return (
    <main className="bg-white font-sans text-gray-900">
      <Navbar />

      <article className="w-full max-w-full md:max-w-[75%] mx-auto px-4 md:px-6 py-20 md:py-40">
        <div className="mb-8 md:mb-12 max-w-full md:max-w-3xl mx-auto">
          {date && (
            <p className="text-green-700 text-sm font-medium mb-2">
              {date}
            </p>
          )}
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          {Excerpt && (
            <p className="text-sm md:text-lg text-gray-500 mb-6 md:mb-8">
              {Excerpt}
            </p>
          )}
        </div>

        {imageUrl && (
          <div className="max-w-full md:max-w-3xl mx-auto mb-8 md:mb-12 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        <div className="max-w-full md:max-w-3xl mx-auto px-1 md:px-0 prose prose-sm md:prose-lg">
          <div
            dangerouslySetInnerHTML={{ __html: Content }}
          />
        </div>
      </article>
    </main>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String!) {
    notionPage(id: { eq: $id }) {
      id
      title
      properties {
        Excerpt
        Date {
          start
        }
        Picture {
          name
          url
        }
        Content
      }
    }
  }
`;
