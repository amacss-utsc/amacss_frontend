import React from 'react';
import { Link } from "gatsby";

import {Container, Section} from '../../data/global';
import ExternalLink from '../common/ExternalLink';
import { year } from '../../data/global';
import { socials } from '../../data/socials_data';
import { SOCIAL_NAV } from '../../data/socials_data';



const Update = () => (
    <Section id="update">
        <Container>
            <div>
                <h2>Update</h2>
                <br></br>
                <p>
                    Welcome to the <b>{year} AMACSS club</b>! 
                    The AMACSS (Association for Mathematical and Computer Science Students) club is a vibrant and inclusive academic organization dedicated to fostering a passion for mathematics, computer science, and statistics among its members and the broader community. 
                    Our primary purpose is to create an engaging platform where students and enthusiasts of these disciplines can come together to learn, collaborate, and grow. 
                    We organize a wide range of events, including workshops, seminars, hackathons, and networking sessions, to promote academic excellence, skill development, and knowledge sharing. 
                    Moreover, we aim to create a sense of belonging and community among like-minded individuals who share a common interest in the mathematical and computational sciences. 
                    Through these activities, AMACSS strives to inspire, educate, and empower its members, enabling them to excel in their academic pursuits and future careers while fostering a deeper appreciation for the beauty and significance of mathematics, computer science, and statistics in our world.
                    <br></br><br></br>
                    We are here for all of your academic needs and CMS questions, so please reach out!
                    This website is now updated for the {year} academic year (except constitution).
                    <br></br><br></br>
                    Please see the <Link to="#contact">Contact Us</Link> section for questions, comments, or concerns.
                </p>
            </div>
        </Container>
    </Section>
);

export default Update;
