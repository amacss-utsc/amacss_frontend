import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {
    ACADEMICS_TEAM,
    EVENTS_TEAM,
    EXECUTIVE_TEAM,
    FIRST_YEAR_TEAM,
    MARKETING_TEAM,
    OPERATIONS_TEAM,
    TECH_TEAM
} from '../../data/teams_data'
import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';


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
        render={data => (
            <Section id="team">
                <Container style={{position: 'relative'}}>
                    <h1>The Team</h1>
                    <br/><br/>
                    <h2>Executive Team</h2>
                    <TeamGrid>
                        {EXECUTIVE_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>Academics Team</h2>
                    <TeamGrid>
                        {ACADEMICS_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>Operations Team</h2>
                    <TeamGrid>
                        {OPERATIONS_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>Tech Team</h2>
                    <TeamGrid>
                        {TECH_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>Events Team</h2>
                    <TeamGrid>
                        {EVENTS_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>Marketing Team</h2>
                    <TeamGrid>
                        {MARKETING_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
                                    <Title>{name}</Title>
                                    <Subtitle>{role}</Subtitle>
                                </div>
                            );
                        })}
                    </TeamGrid>
                    <br/><br/>
                    <h2>First Year Representatives</h2>
                    <TeamGrid>
                        {FIRST_YEAR_TEAM.map(({name, image, role, linkedin}) => {
                            const img = data.allFile.edges.find(
                                ({node}) => node.relativePath === image,
                            ).node;

                            return (
                                <div>
                                    <ExternalLink href={linkedin}><Img fluid={img.childImageSharp.fluid}
                                                                       alt={name}/></ExternalLink>
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

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
