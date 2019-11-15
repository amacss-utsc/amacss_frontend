import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import EventCard from '@components/EventCard'
import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const eventsURL = "https://utsccms.club/";

const Events = () => {
    return (
        <Section>
            <Container>
                <AllEvents>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </AllEvents>
            </Container>
        </Section>
    )
}

const AllEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default Events