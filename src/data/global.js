import styled from "styled-components";
import Constitution from "@static/docs/constitution.pdf";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${(props) =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const year = "2023-2024";
export const LOCATION = "https://goo.gl/maps/4dm87YbHmCWUodH17";
export const CONSTITUTION =
  "https://github.com/amacss-utsc/amacss_constitution";
