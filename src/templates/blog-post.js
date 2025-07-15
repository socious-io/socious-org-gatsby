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

      <article className="max-w-[75%] mx-auto px-6 py-40 items-left">
        <div className="mb-6 max-w-3xl">
          <p className="text-green-700 text-sm font-medium mb-2">
            {date}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          {Excerpt && (
            <p className="text-lg text-gray-500 mb-8">
              {Excerpt}
            </p>
          )}
        </div>

        {imageUrl && (
          <div className="mb-12 rounded-lg overflow-hidden max-w-3xl">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-3xl">
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
