import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import DummyImg from '../images/events/dummy image.jpg'
import {Container, Section} from '@components/global';

const eventsURL = "https://utsccms.club/";

const EventCard = () => {
    return (
        <EventContainer>
             <ImageContainer>
                 <img src={DummyImg}/>
             </ImageContainer>
             <TextContainer>

                <EntryDate>
                    <a>December 15, 2017</a>
                </EntryDate>

                <EntryTitle>
                    <a>AMACSS Gaming Night</a>
                </EntryTitle>

                <EntryExcerpt>
                    <p>
                        Lorem ipsum Sed eiusmod esse aliqua sed 
                        incididunt aliqua incididunt mollit id et 
                        sit proident dolor nulla sed commodo est 
                        ad minim elit reprehenderit nisi officia 
                        aute incididunt velit sint in aliqua..
                    </p>
                </EntryExcerpt>

                <EntryTag>
                    <a>Gaming, Fun</a>
                </EntryTag>

             </TextContainer>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    display: block;
    width: 300px;
    margin-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`;

const TextContainer = styled.div`
    padding-top: 30px;
    padding-left: 28px;
    padding-right: 28px;
    padding-bottom: 36px;
    background-color: #f2f2f2;
`;

const EntryDate = styled.div`
    color: #858585;
    font-size: 1rem;
    line-height: 1.714;
    margin-bottom: 0.6rem;
`;

const EntryTitle = styled.div`
    font-size: 2.0rem;
    line-height: 1.375;
    margin-bottom: 1.1rem;

    a {
        text-decoration: none;
        line-height: inherit;
    }
`;

const EntryExcerpt = styled.div`
    display: block;
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-size: 1rem;
        line-height: 2.2;
        margin-bottom: 1.5rem;
    }
`;

const EntryTag = styled.div`
    a {
        text-decoration: none;
        line-height: inherit;
        color: #0054a5;
    }
`;

export default EventCard