import React from 'react';
import styled from 'styled-components';

import { Container, Section } from '@components/global';
import ExternalLink from '../common/ExternalLink';

const location = "https://goo.gl/maps/hL7Vs5zgmBAbn1dp8";

const Contact = () => (
  <Section id="contact">
    <Container>
      <div>
        <h2>Come See Us</h2>
        <br />
        <p>
          Stop by the AMACSS office (BV-308) during any of the scheduled times
          for assistance in CMS courses, advice on course/program selection,
          general questions, membership purchase or information or just for a chat.
        </p>
        <br/>
        <p>
          <ExternalLink href={location}><Button>View on Map</Button></ExternalLink>
        </p>

      </div>
    </Container>
  </Section>
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

const Button = styled.button`
  // background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: black;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.65em 1em;
  border: 2px solid black;
  border-radius: 3px;
  font-weight: bold;
`;

export default Contact;
