import React from 'react';

import About from '@sections/About';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Team from '@sections/Team';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const AboutPage = () => (
    <Layout>
        <Navbar/>
        <About/>
        <Footer/>
    </Layout>
);

export default AboutPage;
