import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import ExternalLink from "../ExternalLink";

const TeamLayout = ({ teamName, teamInfo, gqlData, path }) => (
  <div>
    <h2>{teamName}</h2>
    <TeamGrid>
      {teamInfo.map(({ name, image, role, linkedin }) => {
        let imgPath = image == "missing.png" ? image : path + image;

        const img = gqlData.allFile.edges.find(
          ({ node }) => node.relativePath === imgPath
        ).node;

        return (
          <div>
            <ExternalLink href={linkedin}>
              <GatsbyImage
                image={img.childImageSharp.gatsbyImageData}
                alt={name}
              />
            </ExternalLink>
            <Title>{name}</Title>
            <Subtitle>{role}</Subtitle>
          </div>
        );
      })}
    </TeamGrid>
  </div>
);
export default TeamLayout;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-template-rows: min-content;
  grid-gap: 25px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media (max-width: ${(props) => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${(props) => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.black.light};
`;
