import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Container} from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => {

  return (
    <HeaderWrapper>
      <Container>
        <Grid>
        <Text>
          <h1>
              The Association of
              <br/>
              Mathematical and
              <br/>
              Computer Science
              <br/>
              Students
          </h1>
          <br/>
        </Text>
        </Grid>
      </Container>
    </HeaderWrapper>
    );
    // <StaticQuery
    //     query={graphql`
    //   query {
    //     art_build: file(
    //       sourceInstanceName: { eq: "art" }
    //       name: { eq: "build" }
    //     ) {
    //       childImageSharp {
    //         fluid(maxWidth: 1400) {
    //           ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //         }
    //       }
    //     }
    //   }
    // `}
    //     render={data => (
    //         <HeaderWrapper id="home">
    //             <Container>
    //                 <Grid>
    //                     <Art>
    //                         <Img fluid={data.art_build.childImageSharp.fluid}/>
    //                     </Art>
    //                     <Text>
    //                         <h1>
    //                             The Association of
    //                             <br/>
    //                             Mathematical and
    //                             <br/>
    //                             Computer Science
    //                             <br/>
    //                             Students
    //                         </h1>
    //                         <br/>
    //                     </Text>
    //                 </Grid>
    //             </Container>
    //         </HeaderWrapper>
    //     )}
    // />
  };

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white.dark};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
