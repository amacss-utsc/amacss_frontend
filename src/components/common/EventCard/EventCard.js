import React from 'react';
import styled from 'styled-components';

const EventCard = (props) => {

    return (
        <EventContainer>
             <ImageContainer>
                 <img src={require('../images/events/' + props.event.img + '.jpg')}/>
             </ImageContainer>
             <TextContainer>

                <EntryDate>
                    <a>
                        {props.event.date}
                    </a>
                </EntryDate>

                <EntryTitle>
                    <a>
                        {props.event.title}
                    </a>
                </EntryTitle>

                <EntryExcerpt>
                    <p>
                        {props.event.desc}
                    </p>
                </EntryExcerpt>

                <EntryTag>
                    <a>
                        {props.event.tags}
                    </a>
                </EntryTag>

             </TextContainer>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    display: block;
    width: 350px;
    margin-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
`;

const ImageContainer = styled.div`
    object-fit: cover;
    max-height: 380px;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    img {
        object-fit: cover;
    }
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