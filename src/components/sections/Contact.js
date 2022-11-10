import React from 'react';
import styled from 'styled-components';

import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const location = "https://goo.gl/maps/4dm87YbHmCWUodH17";

const Contact = () => (
    <Section id="contact">
        <Container>
            <div>
                <h2>Come See Us</h2>
                <br/>
                <p>
                    In Person: AMACSS office (IC-312), open door policy. Max 4 people in room, 2 meters apart due to COVID-19 safety measures.
                    <br/>
                    <p>
                        <ExternalLink href={location}><Button>View on Map</Button></ExternalLink>
                    </p>
                    <br/>
                    Office Hours: Posted soon, come in during any of the scheduled times
                    for assistance in CMS courses, advice on course/program selection,
                    general questions, or information or just for a chat.
                    <br/>
                    <br/>
                    <b>Email:</b> <a href="mailto:amacss.uoft@gmail.com" target="_blank">amacss.uoft@gmail.com</a>
                    <br/>
                    <b>Instagram:</b> <a href="https://instagram.com/amacss_utsc/" target="_blank">amacss_utsc</a>
                    <br/>
                    <b>Discord:</b> <a href="https://discord.gg/9nB958kxTJ" target="_blank">AMACSS Community</a>

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
