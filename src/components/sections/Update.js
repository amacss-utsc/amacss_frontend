import React from 'react';

import {Container, Section} from '@components/global';
import ExternalLink from '../common/ExternalLink';

const amacssEmail = "mailto:amacss.uoft@gmail.com";

const Update = () => (
    <Section id="update">
        <Container>
            <div>
                <h2>Update</h2>
                <br></br>
                <p>
                    Welcome to the <b>2022-2023 AMACSS club</b>! 
                    <br></br><br></br>
                    We are here for all of your academic needs and CMS questions, so please reach out!
                    This website is now updated for the 2022 to 2023 academic year (except constitution).
                    <br></br><br></br>
                    Contact <ExternalLink href={amacssEmail}>amacss.uoft@gmail.com</ExternalLink> for questions, comments, or concerns.
                </p>
            </div>
        </Container>
    </Section>
);

export default Update;
