import styled from 'styled-components';
import Constitution from "@static/docs/constitution.pdf";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 64px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 64px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
        props.accent === 'secondary'
            ? props.theme.color.white.dark
            : props.theme.color.primary
    }`};
`;

export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: black;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.65em 1em;
  border: 2px solid black;
  border-radius: 3px;
  font-weight: bold;
`;


export const year = "2023-2024"
export const LOCATION = "https://goo.gl/maps/4dm87YbHmCWUodH17";
export const CONSTITUTION = Constitution;
