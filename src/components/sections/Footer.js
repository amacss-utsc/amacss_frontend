import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

import {Container} from '../../data/global';
import ExternalLink from '@common/ExternalLink';
import {ReactComponent as AMACSSLogo} from '@images/logos/amacss_logo.svg';

const Footer = () => (
    <StaticQuery
        query={graphql`{
  art_pot: file(sourceInstanceName: {eq: "art"}, name: {eq: "customers_pot"}) {
    childImageSharp {
      gatsbyImageData(width: 960, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
}`}
        render={data => (
            <React.Fragment>
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
