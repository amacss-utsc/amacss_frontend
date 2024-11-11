import React from "react";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";
import Footer from "@sections/Footer";
import styled from "styled-components";
import { Container, Section } from "../data/global";

const NewsletterPage = () => {
  return (
    <Layout>
      <Navbar />
      <Section id="newsletter">
        <Container>
          <div>
            <h2>Our Newsletter</h2>
            <br />
            <StyledParagraph>
              Subscribe to our newsletter to stay updated with the latest news
              and events!
            </StyledParagraph>
            <br />
            {/* <div class="ml-embedded" data-form="3M7MKq"></div> */}
          </div>
        </Container>
      </Section>
      <Footer />
    </Layout>
  );
};
const StyledParagraph = styled.p`
  margin-bottom: 1.5rem;
`;

// export function Head() {
//   return (
//     <>
//       <script>
//         {`
//           (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
//           .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
//           n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
//           (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
//           ml('account', '1182403');
//         `}
//       </script>
//     </>
//   );
// }

export default NewsletterPage;
