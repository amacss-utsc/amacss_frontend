import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container, Section } from '@components/global';
import ExternalLink from '../common/ExternalLink';

const TEAM = [
  {
    name: 'Sonika Verma',
    image: 'josh.jpg',
    role: 'President',
    linkedin: 'https://www.linkedin.com/in/sonika-verma-a068a8132/',
  },
  {
    name: 'Angela Bernuy',
    image: 'lisa.jpg',
    role: 'VP of Academics',
    linkedin: 'https://www.linkedin.com/in/angela-zavaleta-bernuy/',
  },
  {
    name: 'Samiul Haque',
    image: 'ashlyn.jpg',
    role: 'VP of Engineering',
    linkedin: 'https://www.samiulhaque.com/',
  },
  {
    name: 'Zoë Ladouceur',
    image: 'todd.jpg',
    role: 'Director of Marketing',
    linkedin: 'https://www.linkedin.com/in/zo%C3%AB-ladouceur-aa7a98143/',
  },
  {
    name: 'Riyasat Talukder',
    image: 'martin.jpg',
    role: 'Director of Events',
    linkedin: 'https://www.linkedin.com/in/riyasat-talukder-a34071165/',
  },
  {
    name: 'Luke Jin',
    image: 'rose.jpg',
    role: 'Director of Events',
    linkedin: 'https://www.facebook.com/lil.lukeyjin',
  },
];

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
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>The Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role, linkedin }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image,
              ).node;

              return (
                <div>
                  <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid} alt={name}/></ExternalLink>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid}/>
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid}/>
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
