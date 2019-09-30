import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Contact from '@sections/Contact';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const ContactPage = () => (
    <Layout>
        <Navbar/>
        <Contact/>
        <Footer/>
    </Layout>
);

export default ContactPage;
