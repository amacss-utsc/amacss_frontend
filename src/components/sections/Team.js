import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { EXECUTIVE_TEAM, ACADEMICS_TEAM, MARKETING_TEAM, EVENTS_TEAM, FIRSTYEAR_TEAM, SPONSORED_BY, ALUMNI_TEAM } from "../../data/teams_data";
import { Container, Section } from "@components/global";
import ExternalLink from "../common/ExternalLink";

// Clara Note:
/**
 * Some Team sections are commented out because AMACSS Team 2020-2021 decided
 * to pass on the duties of these teams to the President to keep the team small
 * and efficient.
 */

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="team">
        <Container style={{ position: "relative" }}>
          <h1>The Team 2022-2023</h1>
          <br />
          <br />
          <h2>Executive Team</h2>
          <TeamGrid>
            {EXECUTIVE_TEAM.map(({ name, image, role, linkedin }) => {
              const execPath = "exec/" + image;
              if (image === "missing.png") {
                execPath = image;
              }
              const img = data.allFile.edges.find(({ node }) => node.relativePath === execPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h2>Academics Team</h2>
          <TeamGrid>
            {ACADEMICS_TEAM.map(({ name, image, role, linkedin }) => {
              const academicsPath = "academic/" + image;
              const img = data.allFile.edges.find(({ node }) => node.relativePath === academicsPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h2>Marketing Team</h2>
          <TeamGrid>
            {MARKETING_TEAM.map(({ name, image, role, linkedin }) => {
              const marketingPath = "marketing/" + image;
              const img = data.allFile.edges.find(({ node }) => node.relativePath === marketingPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h2>Events Team</h2>
          <TeamGrid>
            {EVENTS_TEAM.map(({ name, image, role, linkedin }) => {
              const eventsPath = "events/" + image;
              const img = data.allFile.edges.find(({ node }) => node.relativePath === eventsPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h2>First Years Team</h2>
          <TeamGrid>
            {FIRSTYEAR_TEAM.map(({ name, image, role, linkedin }) => {
              const firstyearPath = "firstyear/" + image;
              const img = data.allFile.edges.find(({ node }) => node.relativePath === firstyearPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h2>Sponsored By</h2>
          <TeamGrid>
            {SPONSORED_BY.map(({ name, image, role, linkedin }) => {
              const sponsorPath = "sponsor/" + image;
              const img = data.allFile.edges.find(({ node }) => node.relativePath === sponsorPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                </div>
              );
            })}
          </TeamGrid>
          <br />
          <br />
          <h1>Alumni</h1>
          <TeamGrid>
            {ALUMNI_TEAM.map(({ name, image, role, linkedin }) => {
              const alumniPath = "alumni/" + image
              const img = data.allFile.edges.find(({ node }) => node.relativePath === alumniPath).node;

              return (
                <div>
                  <ExternalLink href={linkedin}>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
        </Container>
      </Section>
    )}
  />
);

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

export default Team;
