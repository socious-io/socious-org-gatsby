import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import imageMap from "../../static/notion-images/notion-image-map.json";

const NewsroomArticle = ({ data }) => {
  const post = data.notionPage;
  const { Summary, Date: dateObj, Picture, Content } = post.properties;
  const date = dateObj?.start;

  const notionId = post.fields.notionId?.replace(/-/g, "");
  const ext = imageMap[notionId];
  const imageFilename = ext ? `notion-${notionId}-0.${ext}` : null;
  const localImagePath = imageFilename ? `/notion-images/${imageFilename}` : null;

  const remoteUrl = Picture?.[0]?.url;
  const imageAlt = Picture?.[0]?.name || post.title;

  const finalImage = localImagePath || remoteUrl;

  return (
    <main className="bg-white font-sans text-gray-900">
      <Navbar />

      <article className="max-w-full md:max-w-[75%] mx-auto px-4 md:px-6 py-20 md:py-40 items-left">
        <div className="mb-8 md:mb-12 max-w-3xl">
          {date && (
            <p className="text-green-700 text-sm font-medium mb-2">
              {date}
            </p>
          )}
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          {Summary && (
            <p className="text-sm md:text-lg text-gray-500 mb-6 md:mb-8">
              {Summary}
            </p>
          )}
        </div>

        {finalImage && (
          <div className="max-w-3xl mb-8 md:mb-12 rounded-lg overflow-hidden">
            <img
              src={finalImage}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
              onError={(e) => {
                console.warn(`❌ Could not load image: ${finalImage}`);
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}

        <div className="max-w-3xl prose prose-sm md:prose-lg">
          <p
            dangerouslySetInnerHTML={{ __html: Content }}
          />
        </div>
      </article>
    </main>
  );
};

export default NewsroomArticle;

export const query = graphql`
  query NewsroomArticleQuery($id: String!) {
    notionPage(id: { eq: $id }) {
      id
      fields {
        notionId  # ✅ Exposed via gatsby-node.js
      }
      title
      properties {
        Summary
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
