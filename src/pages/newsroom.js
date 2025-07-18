import React from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import imageMap from "../../static/notion-images/notion-image-map.json";

const Newsroom = ({ data }) => {
  return (
    <main className="bg-white font-sans text-gray-900">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-28">
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-sm md:text-lg text-green-700 font-medium mb-2">
            Our Newsroom
          </h3>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Latest articles</h1>
          <h3 className="text-gray-500 text-sm md:text-lg">
            Stories and updates from the Socious team
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {data.allNotionPage.nodes.map((post) => {
            const { Path, Summary, Date: dateObj, Picture } = post.properties;
            const title = post.title;
            const date = dateObj?.start;

            // Use the real Notion ID exposed via gatsby-node.js
            const notionId = post.fields.notionId?.replace(/-/g, "");
            const ext = imageMap[notionId];
            const imageFilename = ext ? `notion-${notionId}-0.${ext}` : null;
            const localImagePath = imageFilename ? `/notion-images/${imageFilename}` : null;

            const remoteUrl = Picture?.[0]?.url;
            const showImage = localImagePath || remoteUrl;

            return (
              <Link
                key={post.id}
                to={Path}
                className="flex flex-col bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 no-underline"
              >
                {showImage ? (
                  <div className="aspect-[16/9] bg-gray-200 rounded-t-xl overflow-hidden">
                    <img
                      src={localImagePath || remoteUrl}
                      alt={Picture?.[0]?.name || title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.warn(`❌ Could not load image: ${localImagePath}`);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-400 text-sm italic">
                    No image
                  </div>
                )}

                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 mb-1 md:mb-2">{date}</p>
                  <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 hover:underline">
                    {title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">{Summary}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export const query = graphql`
  query NewsroomPageQuery {
    allNotionPage(
      filter: {
        properties: {
          Published: { eq: true }
          Summary: { ne: null }
        }
      }
      sort: { properties: { Date: { start: DESC } } }
    ) {
      nodes {
        id
        fields {
          notionId  # ← Real Notion page ID exposed via gatsby-node.js
        }
        title
        properties {
          Path
          Summary
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

export default Newsroom;
