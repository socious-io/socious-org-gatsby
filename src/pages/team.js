import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import imageMap from "../../static/notion-images/notion-image-map.json";

const Team = ({ data }) => (
  <main className="bg-white font-sans text-gray-900">
    <Navbar />

    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-28">
      <div className="text-center mb-10 md:mb-12">
        <h3 className="text-sm md:text-lg text-green-700 font-medium mb-2">Our team</h3>
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Meet our team</h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
          Socious is powered by a network of changemakers, passionate about contributing to social and environmental impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {data.allNotionPage.nodes.map((member) => {
          const { Role, Bio, Picture } = member.properties;
          const name = member.title;

          const notionId = member.fields.notionId?.replace(/-/g, "");
          const ext = imageMap[notionId];
          const localImageFilename = ext ? `notion-${notionId}-0.${ext}` : null;
          const localImagePath = localImageFilename ? `/notion-images/${localImageFilename}` : null;

          const remoteUrl = Picture?.[0]?.url;
          const imageAlt = Picture?.[0]?.name || name;

          const finalImage = localImagePath || remoteUrl;

          return (
            <div key={member.id} className="text-center flex flex-col items-center">
              {finalImage && (
                <img
                  src={finalImage}
                  alt={imageAlt}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-3 md:mb-4 shadow"
                  loading="lazy"
                  onError={(e) => {
                    console.warn(`❌ Could not load image: ${finalImage}`);
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              <h3 className="text-base md:text-lg font-semibold mb-1">{name}</h3>
              <p className="text-gray-500 text-sm md:text-base mb-1 md:mb-2">{Role}</p>
              <p className="text-gray-600 text-xs md:text-sm max-w-xs">{Bio}</p>
            </div>
          );
        })}
      </div>
    </section>
  </main>
);

export default Team;

export const query = graphql`
  query TeamPageQuery {
    allNotionPage(
      sort: { fields: properties___Order, order: ASC }
      filter: {
        properties: {
          Published: { eq: true }
          Role: { ne: null }
        }
      }
    ) {
      nodes {
        id
        fields {
          notionId  # ✅ real Notion page ID from gatsby-node.js
        }
        title
        properties {
          Role
          Bio
          Order
          Picture {
            name
            url
          }
        }
      }
    }
  }
`;
