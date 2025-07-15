import React from "react";
import { graphql } from "gatsby";

const TeamMember = ({ data }) => {
  const { Name, Role, Bio, Email } = data.notionPage.properties;

  return (
    <article>
      <h1>{Name}</h1>
      <p><strong>{Role}</strong></p>
      <p>{Email}</p>
      {Bio && <p>{Bio}</p>}
    </article>
  );
};

export const query = graphql`
  query TeamMemberById($id: String!) {
    notionPage(id: { eq: $id }) {
      properties {
        Role
        Bio
      }
    }
  }
`;

export default TeamMember;
