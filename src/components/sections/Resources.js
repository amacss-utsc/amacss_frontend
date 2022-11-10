import React from 'react';

import {Container, Section} from '@components/global';
import {graphql, useStaticQuery} from 'gatsby';

import ResourceItem from '@common/ResourceItem';
import ExternalLink from '@common/ExternalLink';

const Resources = () => {
    const youtubeLink = "https://www.youtube.com/watch?v=";
    const data = useStaticQuery(
        graphql`
            query {
                allYoutubeVideo {
                    edges {
                        node {
                            id
                            title
                            description
                            videoId
                            publishedAt
                            privacyStatus
                            channelTitle
                        }
                    }
                }
            }
        `
    );
    // console.log("Data: ", data.allYoutubeVideo.edges[0]);
    // data.allYoutubeVideo.edges.map((video) => {
    //     console.log(video.node);
    // })
    // data.allYoutubeVideo.edges[0].node.title
    // data.allYoutubeVideo.edges[0].node.title.lastIndexOf(" ", data.allYoutubeVideo.edges[0].node.title.lastIndexOf(" "))
    return <Section id="resources">
            <Container>
                <h1 style={{marginBottom: 40}}>Resources</h1>
                <div>
                    {data.allYoutubeVideo.edges.map((video) => {
                        const title = video.node.title;
                        //console.log(title, video.node.title.lastIndexOf(" ", 33));
                        let desc = "";
                        if (video.node.description.substring(0, video.node.description.indexOf(":")).length > 5) {
                            desc = video.node.description.substring(0, video.node.description.indexOf(":"));//.substring(0,30);
                        }
                        //const semester = video.node.title.substring(video.node.title.lastIndexOf(" ", video.node.title.lastIndexOf(" ", video.node.title.lastIndexOf(" "))));
                        const link = youtubeLink + video.node.videoId;
                        return (
                        <ResourceItem 
                            title={title} 
                            key={title}
                            desc={desc}
                            link={link}
                        />
                    )}
                    )}
                </div>
            </Container>
        </Section>
};

export default Resources;
