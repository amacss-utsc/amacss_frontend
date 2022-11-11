import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import About from '@sections/About';
import Signup from '@sections/Signup';
import Contact from '@sections/Contact';
import FAQs from '@sections/Faq';
import Footer from '@sections/Footer';
import Update from '@sections/Update';

const IndexPage = () => (
    <Layout>
        <Navbar/>
        <Header/>
        <Update/>
        <About/>
        {/* <Signup/> */}
        <Contact/>
        <Footer/>
    </Layout>
);

export default IndexPage;
