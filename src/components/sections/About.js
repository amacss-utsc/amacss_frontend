import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '../common/ExternalLink';

const eventsURL = "https://utsccms.club/";
const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid}/>
            </Art>
            <div>
              <h2>Always learning</h2>
              <p>
                AMACSS offers number of academic course seminars through the school year.
                <br/>
                <br/>
                This includes review modules, midterm preparations, and final exam preparations.
                Free access is given to all AMACSS members.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Grow and build your ideas</h2>
              <p>
                AMACSS organizes a number of incredible events <br/>throughout the year.
                <br/> <br/>
                To ensure that you never miss an upcoming event, <br/>check the <ExternalLink href={eventsURL}>Events</ExternalLink> page frequently.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid}/>
            </Art>
          </Grid>
        </Container>

        <Container>
          <div>
            <h2>About Us</h2>
            <p>
              The purpose of AMACSS is to represent, advocate for and enhance the university experience of students in
              the Department of Computer and Mathematical Sciences.
            </p>
            <br/>
            <p>
              The AMACSS executive team, all current students, work to enhance the educational, recreational, social and
              cultural environment of the University of Toronto at Scarborough.
            </p>
          </div>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
  props.inverse &&
  `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
  props.inverse &&
  `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
