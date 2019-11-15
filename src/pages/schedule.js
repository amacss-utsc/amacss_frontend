import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Schedule from '@sections/Schedule';


const SchedulePage = () => (
    <Layout>
        <Navbar/>
        <Schedule />
        <Footer/>
    </Layout>
);

export default SchedulePage;
