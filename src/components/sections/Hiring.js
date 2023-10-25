import React from 'react';

import {Container, Section, Button} from '../../data/global';
import ExternalLink from '../common/ExternalLink';
import { year } from '../../data/global';
import { socials } from '../../data/socials_data';
import { hiring } from '../../data/hiring_data';

const Hiring = () => (
    <Section id="hiring">
        <Container>
            <div>
                <h2>Hiring</h2>
                <br></br>
                <p>
                We are excited to announce the commencement of the hiring process for new positions and teams within AMACSS for the {year} academic year. 
                As we embark on this journey to build a dynamic and talented group, we are searching for individuals who are passionate about mathematics, computer science, and statistics and eager to contribute their skills and enthusiasm to our vibrant community. 
                Our goal is to assemble diverse and innovative teams that will continue to drive AMACSS towards new heights of excellence. 
                Whether you're interested in leadership roles, event coordination, or fostering a sense of belonging within our academic disciplines, we welcome you to join us in shaping the future of AMACSS and empowering the next generation of mathematicians, computer scientists, and statisticians. 
                Please click on the appropriate links below to apply:</p><br></br>
                    <p>
                        <ExternalLink href={hiring.first_year_rep}><Button>First Year Representative</Button></ExternalLink><br></br><br></br>
                        <b>Friday, September 29th at 11:59 pm</b>
                    </p>
            </div>
        </Container>
    </Section>
);

export default Hiring;
