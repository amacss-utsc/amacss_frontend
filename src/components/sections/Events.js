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
                    <EventCard
                        date={EventOne.date}
                        title={EventOne.title}
                        desc={EventOne.desc}
                        tags={EventOne.tags}
                    />
                    <EventCard
                        date={EventTwo.date}
                        title={EventTwo.title}
                        desc={EventTwo.desc}
                        tags={EventTwo.tags}
                    />
                    <EventCard
                        date={EventThree.date}
                        title={EventThree.title}
                        desc={EventThree.desc}
                        tags={EventThree.tags}
                    />
                </AllEvents>
            </Container>
        </Section>
    )
}

const EventOne = {
    date: "Date of Event 1",
    title: "Event 1 Title",
    desc: "Event 1 Description",
    tags: "Event 1 Tags"
}

const EventTwo = {
    date: "Date of Event 2",
    title: "Event 2 Title",
    desc: "Event 2 Description",
    tags: "Event 2 Tags"
}

const EventThree = {
    date: "Date of Event 3",
    title: "Event 3 Title",
    desc: "Event 3 Description",
    tags: "Event 3 Tags"
}

const AllEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default Events