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

export default NewsletterPage;
