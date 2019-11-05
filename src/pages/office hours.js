import React from 'react';

import Loadable from 'react-loadable';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Footer from '@sections/Footer';
import Schedule from '@sections/Schedule';

const OfficeHoursPage = () => (
    <Layout>
        <Navbar/>
        <Schedule />
        <Footer/>
    </Layout>
);

export default OfficeHoursPage;
