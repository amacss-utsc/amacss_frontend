import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  EXECUTIVE_TEAM,
  ACADEMICS_TEAM,
  TECHNOLOGY_TEAM,
  MARKETING_TEAM,
  EVENTS_TEAM,
  FIRSTYEAR_TEAM,
  SPONSORED_BY,
  ALUMNI_TEAM,
  EXTERNAL_AFFAIRS_TEAM,
  FINANCE_TEAM,
} from "../../data/teams_data";
import TeamLayout from "../common/TeamLayout/TeamLayout";
import { Container, Section } from "../../data/global";
import ExternalLink from "../common/ExternalLink";
import { year } from "../../data/global";

// Clara Note:
/**
 * Some Team sections are commented out because AMACSS Team 2020-2021 decided
 * to pass on the duties of these teams to the President to keep the team small
 * and efficient.
 */

const Team = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="team">
        <Container style={{ position: "relative" }}>
          <h1 style={{ marginBottom: "2.2rem" }}>The Team {year}</h1>
          {/* Executive Team */}
          <TeamLayout
            teamName={"Executive Team"}
            teamInfo={EXECUTIVE_TEAM}
            gqlData={data}
            path={"exec/"}
          />
          <br />
          <br />
          {/* First Years Team */}
          <TeamLayout
            teamName={"First Years Team"}
            teamInfo={FIRSTYEAR_TEAM}
            gqlData={data}
            path={"firstyear/"}
          />
          <br />
          <br />
          {/* Academics Team */}
          <TeamLayout
            teamName={"Academics Team"}
            teamInfo={ACADEMICS_TEAM}
            gqlData={data}
            path={"academic/"}
          />
          <br />
          <br />
          {/* Events Team */}
          <TeamLayout
            teamName={"Events Team"}
            teamInfo={EVENTS_TEAM}
            gqlData={data}
            path={"events/"}
          />
          <br />
          <br />
          {/* Marketing Team */}
          <TeamLayout
            teamName={"Marketing Team"}
            teamInfo={MARKETING_TEAM}
            gqlData={data}
            path={"marketing/"}
          />
          <br />
          <br />
          {/* Developer Team */}
          <TeamLayout
            teamName={"Technology Team"}
            teamInfo={TECHNOLOGY_TEAM}
            gqlData={data}
            path={"technology/"}
          />
          <br />
          <br />
          {/* EA Team */}
          <TeamLayout
            teamName={"External Affairs Team"}
            teamInfo={EXTERNAL_AFFAIRS_TEAM}
            gqlData={data}
            path={"external_affairs/"}
          />
          <br />
          <br />
          {/* Finance Team */}
          <TeamLayout
            teamName={"Finance Team"}
            teamInfo={FINANCE_TEAM}
            gqlData={data}
            path={"finance/"}
          />
          <br />
          <br />
          {/* Sponsored By */}
          <TeamLayout
            teamName={"Sponsored By"}
            teamInfo={SPONSORED_BY}
            gqlData={data}
            path={"sponsor/"}
          />
          <br />
          <br />
          {/* Alumni */}
          <TeamLayout
            teamName={"Alumni"}
            teamInfo={ALUMNI_TEAM}
            gqlData={data}
            path={"alumni/"}
          />
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
