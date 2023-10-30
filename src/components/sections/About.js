import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import {Container, Section} from '../../data/global';
import ExternalLink from '../common/ExternalLink';

const instagramURL = "https://www.instagram.com/amacss_utsc/";
const amacssEmail = "mailto:amacss.uoft@gmail.com";

const About = () => (
    <StaticQuery
        query={graphql`{
  art_fast: file(sourceInstanceName: {eq: "art"}, name: {eq: "fast"}) {
    childImageSharp {
      gatsbyImageData(width: 760, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
  art_learn: file(sourceInstanceName: {eq: "art"}, name: {eq: "learn_yourself"}) {
    childImageSharp {
      gatsbyImageData(width: 760, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
  art_ideas: file(sourceInstanceName: {eq: "art"}, name: {eq: "ideas"}) {
    childImageSharp {
      gatsbyImageData(width: 760, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
}`}
        render={data => (
            <Section>
                <Container id="about">
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
                            <GatsbyImage image={data.art_ideas.childImageSharp.gatsbyImageData} />
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
                </Container>
                <Container>
                    <Grid>
                        <div>
                            <h2>Grow and build your ideas</h2>
                            <p>
                                AMACSS organizes a number of incredible events throughout the year, and this year is no exception. 
                                <br></br>
                                Some of our past events have been:
                                </p>
                                </div>
                      </Grid>
                </Container>
                <Container>
                  <Grid>
                    <div>
                      <p>
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
                            </p>
                        </div>
                        <Art>
                            <GatsbyImage image={data.art_learn.childImageSharp.gatsbyImageData} />
                        </Art>
                    </Grid>
                </Container>
                <Container>
                                <p style={{ textAlign: 'center' }}>To ensure that you never miss an upcoming event, <br/>check out our <ExternalLink
                                href={instagramURL}>Instagram</ExternalLink> page frequently.</p>
                                <br></br>   <br/> <br/>
                      <h1 style={{ textAlign: 'center' }}>Code of Conduct</h1><br></br>
                      <p>
<ol>
  <li><b>Purpose</b><br></br>
    The Association of Mathematical and Computer Science Students (AMACSS) at the University of Toronto Scarborough (UTSC) is committed to creating and maintaining a safe and inclusive environment for all its members. This code of conduct outlines our expectations for behavior and our commitment to upholding our values of respect, inclusion, and diversity.
  </li>
  <li><b>Scope</b><br></br>
    This code of conduct applies to all members of AMACSS, including but not limited to executive members, general members, and volunteers.
  </li>
  <li><b>General Conduct</b><br></br>
    All members of AMACSS are expected to:
    <ul>
      <li>Treat others with respect, kindness, and empathy.</li>
      <li>Act in a professional and ethical manner.</li>
      <li>Refrain from engaging in any form of discrimination, harassment, or bullying.</li>
      <li>Respect the privacy and confidentiality of others.</li>
      <li>Refrain from engaging in any activity that may bring AMACSS or the University of Toronto into disrepute.</li>
      <li>Adhere to all applicable laws, policies, and regulations.</li>
    </ul>
  </li>
  <li><b>Discrimination, Harassment, and Bullying</b><br></br>
    AMACSS has zero-tolerance for discrimination, harassment, and bullying of any kind. This includes but is not limited to discrimination based on race, gender, sexual orientation, religion, age, disability, or any other personal characteristic.
    Examples of prohibited conduct include:
    <ul>
      <li>Verbal abuse, including derogatory comments or slurs.</li>
      <li>Physical abuse or intimidation.</li>
      <li>Making unwanted advances or gestures of a sexual nature.</li>
      <li>Bullying, including cyberbullying, through the use of electronic communication, social media, or any other means.</li>
    </ul>
    If any member of AMACSS experiences or witnesses any form of discrimination, harassment, or bullying, they should report it to a member of the executive immediately.
  </li>
  <li><b>Confidentiality</b><br></br>
    All members of AMACSS are expected to respect the privacy and confidentiality of others. This includes but is not limited to personal information, academic records, and sensitive business information.
  </li>
  <li><b>Conflict Resolution</b><br></br>
    AMACSS is committed to resolving conflicts in a fair and respectful manner. Any member who is experiencing a conflict with another member should first attempt to resolve it informally. If the conflict cannot be resolved informally, the member may seek assistance from a member of the executive.
  </li>
  <li><b>Enforcement</b><br></br>
    AMACSS takes violations of this code of conduct seriously. Any member who violates this code of conduct may be subject to disciplinary action, up to and including termination of membership.
  </li>
  <li><b>Amendments</b><br></br>
    This code of conduct may be amended from time to time by a two-thirds vote of the executive members of AMACSS. Any amendments to this code of conduct must be communicated to all members in writing.
  </li>
</ol>
                      </p>
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
