import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Team from '@sections/Team';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const TeamPage = () => (
    <Layout>
        <Navbar/>
        <Team/>
        <Footer/>
    </Layout>
);

export default TeamPage;
