import React from 'react';

import {Container, Section} from '../../data/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
    {
        title: 'What is AMACSS?',
        content: () => (
            <>
                Enjoy the power of the latest web technologies – React.js , Webpack ,
                modern JavaScript and CSS and more — all set up and waiting for you to
                start building
            </>
        ),
    },
    {
        title: 'How can I get involved with AMACSS?',
        content: () => (
            <>
                Gatsby’s rich data plugin ecosystem lets you build sites with the data
                you want — from one or many sources: Pull data from headless CMSs, SaaS
                services, APIs, databases, your file system, and more directly into your
                pages using GraphQL.
            </>
        ),
    },
    {
        title: 'How do I find out about AMACSS events?',
        content: () => (
            <>
                Gatsby.js is Internet Scale. Forget complicated deploys with databases
                and servers and their expensive, time-consuming setup costs,
                maintenance, and scaling fears. Gatsby.js builds your site as “static”
                files which can be deployed easily on dozens of services.
            </>
        ),
    },
    {
        title: 'Which courses do AMACSS hold review seminar?',
        content: () => (
            <>
                Do not build a website with last decade’s tech. The future of the web is
                mobile, JavaScript and APIs—the{` `}
                <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
                Every website is a web app and every web app is a website. Gatsby.js is
                the universal JavaScript framework you’ve been waiting for.
            </>
        ),
    },
    {
        title: 'Where can I find previously recorded review seminars?',
        content: () => (
            <>
                Gatsby.js is a static PWA (Progressive Web App) generator. You get code
                and data splitting out-of-the-box. Gatsby loads only the critical HTML,
                CSS, data, and JavaScript so your site loads as fast as possible. Once
                loaded, Gatsby prefetches resources for other pages so clicking around
                the site feels incredibly fast.
            </>
        ),
    },
];

const Faq = () => (
    <Section id="faq">
        <Container>
            <h1 style={{marginBottom: 40}}>Frequently Asked Questions</h1>
            <div>
                {FAQS.map(({title, content}) => (
                    <FaqItem title={title} key={title}>
                        {content()}
                    </FaqItem>
                ))}
            </div>
        </Container>
    </Section>
);

export default Faq;
