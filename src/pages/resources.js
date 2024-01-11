import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Team from '@sections/Team';
import Resources from '@sections/Resources';
import Footer from '@sections/Footer';

const ResourcePage = () => (
    <Layout>
        <Navbar/>
        <Resources/>
        <Footer/>
    </Layout>
);

export default ResourcePage;
