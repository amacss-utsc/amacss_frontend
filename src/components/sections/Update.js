import React from "react";

import { Container, Section } from "../../data/global";
import ExternalLink from "../common/ExternalLink";
import { year } from "../../data/global";
import { socials } from "../../data/socials_data";

const Update = () => (
  <Section id="update">
    <Container>
      <div>
        <h2>Update</h2>
        <br></br>
        <p>
          Welcome to the <b>{year} AMACSS club</b>!<br></br>
          <br></br>
          We are here for all of your academic needs and CMS questions, so
          please reach out! This website is now updated for the {year} academic
          year.
          <br></br>
          <br></br>
          Contact{" "}
          <ExternalLink href="mailto:{socials.email}">
            {socials.email}
          </ExternalLink>{" "}
          for questions, comments, or concerns.
        </p>
      </div>
    </Container>
  </Section>
);

export default Update;
