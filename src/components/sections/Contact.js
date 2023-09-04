import React from 'react';
import styled from 'styled-components';

import {Container, Section} from '../../data/global';
import ExternalLink from '../common/ExternalLink';
import { socials } from '../../data/socials_data';
import { LOCATION } from '../../data/global';

const Contact = () => (
    <Section id="contact">
        <Container>
            <div>
                <h2>Come See Us</h2>
                <br/>
                <p>
                    In Person: AMACSS office (IC-312). We have an open door policy!
                    <br/>
                    <p>
                        <ExternalLink href={LOCATION}><Button>View on Map</Button></ExternalLink>
                    </p>
                    <br/>
                    Office Hours: Posted soon, come in during any of the scheduled times
                    for assistance in CMS courses, advice on course/program selection,
                    general questions, or information or just for a chat.
                    <br/>
                    <br/>
                    <b>Email:</b> <a href="mailto:{socials.email}" target="_blank">{socials.email}</a>
                    <br/>
                    <b>Instagram:</b> <a href="https://instagram.com/{socials.instagram}/" target="_blank">{socials.instagram}</a>
                    <br/>
                    <b>Discord:</b> <a href={socials.discord} target="_blank">AMACSS Discord Community</a>

                </p>
            </div>
        </Container>
    </Section>
);
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
