import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const eventsURL = "https://utsccms.club/";

const Events = () => {
    console.log("events div",EventContainer);
    return (
        <Section id="events">
            <Container>
                <EventContainer>
                    <h1>hello</h1>
                </EventContainer>
            </Container>
        </Section>
    )
}

const EventContainer = styled.div`
    h1 {
        font-size: 30px;
    }
`;

export default Events
