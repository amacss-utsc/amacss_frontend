import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const eventsURL = "https://utsccms.club/";

const Events = () => {
    return (
        <Section id="events">
            <Container>
                <eventContainer>
                    <h1>hello</h1>
                </eventContainer>
            </Container>
        </Section>
    )
}

const eventContainer = styled.div`
    h1 {
        font-size: 30px;
    }
    background: black;
`;

export default Events
