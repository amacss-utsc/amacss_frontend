import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Container} from '@components/global';
import ExternalLink from '@common/ExternalLink';
import {ReactComponent as AMACSSLogo} from '@images/logos/amacss_logo.svg';

const Footer = () => (
    <StaticQuery
        query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
        render={data => (
            <React.Fragment>
                <Art>
                    <Img
                        fluid={data.art_pot.childImageSharp.fluid}
                        style={{width: 480, maxWidth: '100%', marginBottom: -16}}
                    />
                </Art>
                <FooterWrapper>
                    <StyledContainer>
                        <Copyright>
                            <AMACSSLogo/>
                            <span>
                <br/>Illustrations by
                                {` `}
                                <ExternalLink href="https://twitter.com/diana_valeanu">
                  @diana_valeanu
                </ExternalLink>
              </span>
                        </Copyright>
                    </StyledContainer>
                </FooterWrapper>
            </React.Fragment>
        )}
    />
);

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.dark};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
