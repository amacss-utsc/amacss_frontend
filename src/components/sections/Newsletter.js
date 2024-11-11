import React from "react";
import styled from "styled-components";
import { Container, Section } from "../../data/global";

const Newsletter = () => {
  return (
    <Section id="newsletter">
      <Container>
        <div>
          <h2>Our Newsletter</h2>
          <br />
          <StyledParagraph>
            Subscribe to our newsletter to stay updated with the latest news and
            events!
          </StyledParagraph>
          <br />
          <div class="ml-embedded" data-form="3M7MKq"></div>
        </div>
      </Container>
    </Section>
  );
};

export default Newsletter;

const StyledParagraph = styled.p`
  margin-bottom: 1.5rem;
`;
