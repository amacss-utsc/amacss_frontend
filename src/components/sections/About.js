import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const instagramURL = "https://www.instagram.com/amacss_utsc/";
const amacssEmail = "mailto:amacss.uoft@gmail.com";

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
                    <div>
                        <h2>Update</h2>
                        <br></br>
                        <p>
                            Welcome to the <b>2022-2023 AMACSS club</b>! 
                            <br></br><br></br>
                            We are here for all of your academic needs and CMS questions, so please reach out!
                            This website is now updated for the 2022 to 2023 academic year (except constitution).
                            <br></br><br></br>
                            Contact <ExternalLink href={amacssEmail}>amacss.uoft@gmail.com</ExternalLink> for possible mistakes/typos.
                        </p>
                        <br>
                        </br>
                        <br>
                        </br>
                    </div>
                </Container>
                <Container>
                    <div>
                        <h2>About Us</h2>
                        <p>
                            The purpose of AMACSS is to represent, advocate for and enhance the university experience of
                            students in the Department of Computer and Mathematical Sciences. Through our club, we strive to 
                            bring a welcoming and informative space to all students within CMS, and we host 
                            both academic and non-academic events to help you succeed and have the best university experience!
                            
                        </p>
                        <br/>
                        <p>
                            The AMACSS executive team, all current students, work to enhance the educational,
                            recreational, social and
                            cultural environment of the University of Toronto at Scarborough.
                        </p>
                    </div>
                </Container>
                <Container>
                    <Grid inverse>
                        <Art>
                            <Img fluid={data.art_ideas.childImageSharp.fluid}/>
                        </Art>
                        <div>
                            <h2>Always learning</h2>
                            <p>
                                AMACSS offers number of <b>academic course seminars</b> through the school year.
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
                                AMACSS organizes a number of incredible events throughout the year, and this year is no exception. 
                                <br></br>
                                Some of our past events have been:
                                <ol>
                                  <li><ExternalLink href="https://www.instagram.com/p/CbLYOMiO84n/">Talent Show & Games Night</ExternalLink> - March 30th, 2022</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CY1sblZlETj/">Gathertown Games/Social Night</ExternalLink> - January 21st, 2022</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CUDw4urly69/">Let the Games Begin!</ExternalLink> - September 30th, 2021</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/COdrVSGBgoI/">Startup Showcase</ExternalLink> - May 8th, 2021</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/COLRlG5hk8q/">Board Games Night</ExternalLink> - April 30th, 2021</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CN-k0wWBkot/">Front End Workshop</ExternalLink> - April 24th, 2021</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CGjHWvthpDx/">CMS Streams Panelist Session</ExternalLink> - October 22nd, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CGTLmbGBLju/">Among Us Night</ExternalLink> - October 15th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CFIhSt5hnOw/">CMS Clubs Mix and Mingle</ExternalLink> - September 16th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/CE0I541hkWa/">First Year Professor Interviews</ExternalLink> - September 10th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B9maIIZBea2/">Pi Day!</ExternalLink> - March 13th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B9ZzE-wBcmO/">Annual Post Info Session</ExternalLink> - March 9th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B8g-ihxB867/">Gaming Night</ExternalLink> - February 13th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/BuZtLMjATJj/">Gaming Night!</ExternalLink> - January 24th, 2020</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B5lE6fPhX-P/">Food Celebration Drive!</ExternalLink> - December 2nd, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B5IzizAhUIJ/">Gaming Night</ExternalLink> - November 22nd, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B5EMZaqlepR/">Professor Projects with Prof. Brian Harrington</ExternalLink> - November 20th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B4swAHMBTw8/">Professor Projects with Prof. Raymond Grinnell</ExternalLink> - November 11th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B4IRagLBvBE/">Pumpkin Carving</ExternalLink> - October 28th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B371nMfhEk4/">Gaming Night</ExternalLink> - October 23th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B24_UywBX5R/">Gaming Night</ExternalLink> - September 27th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B2wdPCQBjBC/">Professor Projects with Prof. Anya Tafliovich</ExternalLink> - September 23rd, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/B2U78Q0B4tE/">First Year Mix and Mingle</ExternalLink> - September 16th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/BvfGXp5ggnl/">Coffee House</ExternalLink> - March 28th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/BvPrRLGgvvl/">Gaming Night</ExternalLink> - March 22nd, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/Bu7C25pAUt1/">Pi Day</ExternalLink> - March 14th, 2019</li>
                                  <li><ExternalLink href="https://www.instagram.com/p/BuZtLMjATJj/">Gaming Night</ExternalLink> - March 1st, 2019</li>

                                </ol>
                                <br/> <br/>
                                To ensure that you never miss an upcoming event, <br/>check out our <ExternalLink
                                href={instagramURL}>Instagram</ExternalLink> page frequently.
                                <br></br>
                            </p>
                        </div>
                        <Art>
                            <Img fluid={data.art_learn.childImageSharp.fluid}/>
                        </Art>
                    </Grid>
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
