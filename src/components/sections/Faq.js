import React from "react";

import { Container, Section } from "../../data/global";

import FaqItem from "@common/FaqItem";
import ExternalLink from "@common/ExternalLink";
import { socials } from "../../data/socials_data";

const FAQS = [
  {
    title: "What is AMACSS?",
    content: () => (
      <>
        AMACSS stands for the Association of Mathematical and Computer Science
        Students. At AMACSS, we strive to enhance the experience of every CMS
        student through our academic and non-academic events. By attending our
        seminars and events, you are contributing to the AMACSS community! Check
        our <a href="/about">about</a> page to learn more about AMACSS, and join
        our social media community to stay informed on opportunities to
        participate in our events.
      </>
    ),
  },
  {
    title: "How can I get involved with AMACSS?",
    content: () => (
      <>
        Hiring for every AMACSS team (executive, academics, marketing, events,
        technology, finance, and first-year) is conducted at the beginning of
        each academic year. Join our <a href={`${socials.discord}`}>Discord</a>{" "}
        community for access to application forms, and important deadlines.
      </>
    ),
  },
  {
    title: "How do I find out about AMACSS events?",
    content: () => (
      <>
        Join our social media community for timely updates on our events! We
        have Facebook, Instagram, and Discord communities, links to all of which
        can be found on the navigation menu above.
      </>
    ),
  },
  {
    title: "Which courses do AMACSS hold review seminar?",
    content: () => (
      <>
        Check our <a href="/resources">resources</a> page for a subset of
        previously held review seminars! Currently our Academics Team is
        expanding our coverage of CMS courses. For inquiries regarding a
        specific course, feel free to inquire on the AMACSS Discord Server!
      </>
    ),
  },
  {
    title: "Where can I find previously recorded review seminars?",
    content: () => (
      <>
        To find previously recorded review seminars, navigate to our{" "}
        <a href="/resources">resources</a> page! Alternatively, visit the{" "}
        <a href={`${socials.youtube}`}>AMACSS Youtube channel</a> and navigate
        our playlist.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
