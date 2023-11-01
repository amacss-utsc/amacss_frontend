import React from "react";

import { Container, Section } from "../../data/global";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ResourceItem from "@common/ResourceItem";
import ExternalLink from "@common/ExternalLink";

const Resources = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=";
  const data = useStaticQuery(
    graphql`
      query {
        allYoutubeVideo {
          edges {
            node {
              id
              title
              description
              videoId
              publishedAt
              privacyStatus
              channelTitle
            }
          }
        }
      }
    `
  );
  // console.log("Data: ", data.allYoutubeVideo.edges[0]);
  // data.allYoutubeVideo.edges.map((video) => {
  //     console.log(video.node);
  // })
  // data.allYoutubeVideo.edges[0].node.title
  // data.allYoutubeVideo.edges[0].node.title.lastIndexOf(" ", data.allYoutubeVideo.edges[0].node.title.lastIndexOf(" "))
  return (
    <Section id="resources">
      <Container>
        <h1 style={{ marginBottom: 40 }}>Resources</h1>
        <CenterGrid>
          <Grid>
            {data.allYoutubeVideo.edges.map((video) => {
              const title = video.node.title;
              console.log(video.node.publishedAt);
              //console.log(title, video.node.title.lastIndexOf(" ", 33));
              let desc = video.node.description.split("\n")[0];
              const link = youtubeLink + video.node.videoId;
              return (
                <ResourceItem
                  title={title}
                  key={title}
                  desc={desc}
                  link={link}
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
