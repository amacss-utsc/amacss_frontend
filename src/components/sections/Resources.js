import React from "react";

import { Container, Section } from "../../data/global";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ResourceItem from "@common/ResourceItem";
import ExternalLink from "@common/ExternalLink";

const Resources = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=";
  const YTdata = useStaticQuery(graphql`
    query {
      allYoutubeVideo {
        edges {
          node {
            title
            description
            videoId
            publishedAt
          }
        }
      }
    }
  `);

  const YTdataFormatted = YTdata.allYoutubeVideo.edges.map((edge) => ({
    title: edge.node.title,
    description: edge.node.description.split("\n")[0],
    link: `https://www.youtube.com/watch?v=${edge.node.videoId}`,
    date_added: edge.node.publishedAt,
    button_message: "View on YouTube",
  }));

  const extraData = [
    {
      title: "Rate My Cources",
      description: "View and submit reviews for courses at UTSC!",
      link: "https://ratemycourses.org",
      date_added: "2025-01-09",
      button_message: "View RMC!",
    },
    {
      title: "Math and Stats Support (CTL)",
      description:
        "Check out services offered by UTSC's Centre for Teaching and Learning!",
      link: "https://www.utsc.utoronto.ca/ctl/math-and-stats-support",
      date_added: "2023-11-19", // YYYY-MM-DD
      button_message: "Visit CTL Website",
    },
  ];

  const allData = [...YTdataFormatted, ...extraData];
  allData.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

  console.log(YTdata.allYoutubeVideo.edges);
  return (
    <Section id="resources">
      <Container>
        <h1 style={{ marginBottom: 40 }}>Resources</h1>
        <CenterGrid>
          <Grid>
            {allData.map((data) => {
              const { title, description, link, button_message } = data;
              return (
                <ResourceItem
                  title={title}
                  key={title}
                  desc={description}
                  link={link}
                  button_message={button_message}
                />
              );
            })}
          </Grid>
        </CenterGrid>
      </Container>
    </Section>
  );
};

export default Resources;

const CenterGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  align-items: stretch;
`;
