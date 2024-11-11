import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Newsletter from '@sections/Newsletter';

const NewsletterPage = () => {
  return (
    <Layout>
      <Navbar />
      <Newsletter />
      <Footer />
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <script>
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1182403');
        `}
      </script>
    </>
  );
}

export default NewsletterPage;
