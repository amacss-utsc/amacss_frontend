import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import {graphql, StaticQuery} from 'gatsby';

import {Container, Section} from '../../data/global';

const SignUp = () => (
    <StaticQuery
        query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
        render={data => (
            <Section id="sign%20up" accent>
                <StyledContainer>
                    <div>
                        <h1>What are you waiting for?</h1>
                        <br/><br/>
                        <h2>Sign up for our newsletter below</h2>
                        <br/>
                        <form
                            action="https://amacss.us16.list-manage.com/subscribe/post?u=641679e76875b8186d30d1f0b&amp;id=362221620e"
                            method="post" id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <label>
                                <p style={{color: '#F6F6F6'}}>
                                    Email:
                                    <Input type="email" name="EMAIL"/>
                                </p>
                            </label>
                            <br/>
                            <Button>Submit</Button>
                        </form>
                    </div>
                    <Art>
                        <Img fluid={data.art_story.childImageSharp.fluid}/>
                    </Art>
                </StyledContainer>
            </Section>
        )}
    />
);


const StyledContainer = styled(Container)`
    display: flex;
    justify-content: flex-end;
    position: relative;
    color:  ${props => props.theme.color.white.dark};

    @media (max-width: ${props => props.theme.screen.md}) {
      justify - content: center;
    }
    `;

const Art = styled.figure`
    width: 600px;
    position: absolute;
    top: -12%;
    right: 50%;
    opacity: 1;
    @media (max-width: ${props => props.theme.screen.lg}) {
      top: 0;
      right: 65%;
      width: 500px;
    }

    @media (max-width: ${props => props.theme.screen.md}) {
      display: none;
    }
    `;

const Button = styled.button`
  // background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: #dedcdc;
  font-size: 1.2em;
  margin-top: 1em;
  padding: 0.65em 2.5em;
  border: 2px solid #dedcdc;
  border-radius: 3px;
  font-weight: bold;
`;

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: 'email',
    // or we can define dynamic ones
    size: '0.55em',
}))`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  width: 75%;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


export default SignUp;
